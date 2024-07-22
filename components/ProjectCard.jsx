"use client"
import React from 'react'
import Image from 'next/image'

//data
import datos from "../datos.json"
import { FaGithub, FaUnity } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const projectsJson = datos.projects;


const ProjectCard = ({project}) => {
  return (
        <div className="flex justify-center items-center border font-sans  rounded-md">
          <div className="m-5 border border-blue-500 min-h-[200px] min-w-[200px]">
            <Image src={project.image} width={200} height={200} className="rounded-md" alt="IMAGE"/>
          </div>
          <div class="flex-auto p-6 border border-red-400">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-2xl font-semibold text-accent">
                {project.title}
              </h1>
              <div class="text-lg font-semibold text-slate-500 flex flex-row">
                {project.tags.map((tag, index) => {
                  return(
                  <div className="px-2" key={index}>{tag}</div>
                )})}
              </div>
              <div class="w-full flex-none text-sm font-medium text-slate-500 mt-2">
                {project.description}
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-2 flex text-md">
                <FaUnity/>
                <TbBrandCSharp/>
              </div>
            </div>
            <div class="flex space-x-4 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                  Buy now
                </button>
                <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
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