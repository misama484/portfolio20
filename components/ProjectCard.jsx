"use client"
import React from 'react'
import Image from 'next/image'

//data
import datos from "../datos.json"
import { FaGithub, FaJava, FaReact, FaUnity } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandTailwind, TbWorldWww } from 'react-icons/tb';
import { SiMongodb, SiWindows95, SiAndroidstudio, SiMui, SiStyledcomponents } from 'react-icons/si';
import { IoGameControllerOutline  } from 'react-icons/io5';
import { IoLogoAndroid } from 'react-icons/io';

const projectsJson = datos.projects;

const iconos = {
  FaUnity: <FaUnity />,
  TbBrandCSharp: <TbBrandCSharp />,
  FaJava: <FaJava />,
  SiMongodb: <SiMongodb />,
  FaGithub: <FaGithub />,
  FaReact: <FaReact />,
  SiWindows95: <SiWindows95 />,
  SiAndroidstudio: <SiAndroidstudio />,
  SiMui: <SiMui />, 
  SiStyledcomponents: <SiStyledcomponents />,
  TbBrandTailwind: <TbBrandTailwind />,
  SiStyledcomponents: <SiStyledcomponents />,
  IoGameControllerOutline: <IoGameControllerOutline />,
  TbWorldWww: <TbWorldWww />,
  IoLogoAndroid: <IoLogoAndroid />
};

const ProjectCard = ({project}) => {
  const tecnologias = [
    {nombre: "Unity", valor: "FaUnity"},
    {nombre: "C#", valor:"TbBrandCSharp"},
    {nombre: "Java", valor:"FaJava"},
    {nombre: "MongoDB", valor: "SiMongodb"},
    {nombre: "Github", valor: "FaGithub"},
    {nombre: "ReactJs", valor: "FaReact"},
    {nombre: "React", valor: "FaReact"},
    {nombre: "Windows", valor: "SiWindows95"},
    {nombre: "Android", valor: "SiAndroidstudio"},
    {nombre: "MUI", valor:"SiMui"},
    {nombre: "StyledComponents", valor:"SiStyledcomponents"},
    {nombre: "React Native", valor: "FaReact"},
    {nombre: "React Native Paper", valor: "FaReact"},
    {nombre: "TailwindCSS", valor:"TbBrandTailwind"},
  ]
  const categories = [
    {nombre: "game", valor: "IoGameControllerOutline"},
    {nombre: "windows", valor: "SiWindows95"},
    {nombre: "android", valor: "IoLogoAndroid"},
    {nombre: "web", valor: "TbWorldWww"},
  ]
  const categoriaProyecto = categories.find(categoria => categoria.nombre === project.category);
  console.log(categoriaProyecto.valor)

  return (
        <div className="flex justify-center items-center  font-sans rounded-md hover:border hover:border-accent">
          <div className="m-5  min-h-[200px] min-w-[200px]">
            <Image src={project.image} width={200} height={200} className="rounded-md" alt="IMAGE"/>
          </div>
          <div class="flex-auto p-6 ">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-2xl font-semibold text-accent">
                {project.title}
              </h1>
              <div class="text-xl font-semibold text-accent"> 
                {iconos[categoriaProyecto.valor]} {/* NO FUNCIONA, DEBE COMPARAR CON LA LISTA DE ICONOS PARA MOSTRAR LA CATEGORIA */}
                
            </div>
              <div class="w-full flex-none text-sm font-medium text-slate-500 mt-2">
                {project.description}
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-2 flex text-2xl gap-8">
                {project.tags.map((tag, index) => {
                  const resultado = tecnologias.find(tecnologia => tecnologia.nombre === tag)
                  const nombreComponente = resultado.valor
                  return (
                    <div key={index}>
                      <div className='flex justify-center'> {iconos[nombreComponente]} </div>
                      <div className='flex justify-center text-sm' > {tag} </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div class="flex space-x-4 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                  Ver proyecto
                </button>
                <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white-900" type="button">
                  Add to bag
                </button>
              </div>
              <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-white hover:text-accent border border-white hover:border-accent" type="button" aria-label="Like">
                <FaGithub className='text-xl hover:text-accent'/>
              </button>
            </div>
            <p class="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </div>
        </div>
  )
}

export default ProjectCard