"use client";
import { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaBootstrap, FaPython, FaJava, FaGit, FaGithub, FaUnity, FaLinux, FaAws, FaRegUser, FaMobileAlt, FaRocket, FaMapMarkedAlt, FaMarker, } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiFirebase, SiAndroidstudio, SiWindows95, SiMui, SiStyledcomponents } from 'react-icons/si'
import { TbBrandReactNative, TbFileTypeXml, TbBrandCSharp, TbBrandTailwind, TbWorldWww } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { IoGameControllerOutline, IoLogoAndroid } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea,  } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

//Datos
import data from "../../datos.json"


const About = () => {

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
    IoLogoAndroid: <IoLogoAndroid />,
    FaHtml5: <FaHtml5 />,
    FaCss3: <FaCss3 />,
    FaJs: <FaJs />,
    FaBootstrap: <FaBootstrap />,
    SiNextdotjs: <SiNextdotjs />,
    TbBrandReactNative: <TbBrandReactNative />,
    FaNodeJs: <FaNodeJs />, //HASTA AQUI
    FaPython: <FaPython />,
    SiMysql: <SiMysql />,
    SiFirebase: <SiFirebase />,
    SiMongodb: <SiMongodb />,
    TbFileTypeXml: <TbFileTypeXml />,
    FaGit: <FaGit />,
    FaAws: <FaAws />,
    FaLinux: <FaLinux />,
    FaFigma: <FaFigma />,
    FaMobileAlt: <FaMobileAlt />,
    /* About */
    FaRegUser: <FaRegUser />,
    FaRocket: <FaRocket />,
    FaMapMarkedAlt: <FaMapMarkedAlt />,
    MdAlternateEmail: <MdAlternateEmail />,
    LuLanguages: <LuLanguages />,
    FaMobileAlt: <FaMobileAlt />,
    
  };
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
    {nombre: "React Native", valor: "TbBrandReactNative"},
    {nombre: "React Native Paper", valor: "TbBrandReactNative"},
    {nombre: "HTML", valor:"FaHtml5"},
    {nombre: "CSS", valor:"FaCss3"},
    {nombre: "JavaScript", valor:"FaJs"},
    {nombre: "Bootstrap", valor: "FaBootstrap"},
    {nombre: "Next.js", valor: "SiNextdotjs"},
    {nombre: "NodeJs", valor:"FaNodeJs"},
    {nombre: "TailwindCSS", valor: "TbBrandTailwind"},
    {nombre: "Python", valor: "FaPython"},
    {nombre: "MySQL", valor: "SiMysql"},
    {nombre: "Firebase", valor: "SiFirebase"},
    {nombre: "XML", valor: "TbFileTypeXml"},
    {nombre: "Android Studio", valor: "SiAndroidstudio"},
    {nombre: "Windows Server", valor: "SiWindows95"},
    {nombre: "Linux", valor: "FaLinux"},
    {nombre: "AWS", valor: "FaAws"},
    {nombre: "Figma", valor: "FaFigma"},
    {nombre: "Git", valor: "FaGit"},
    
  ]

  const aboutIcons = [
    {nombre: "Nombre", valor: "FaRegUser"},
    {nombre: "Experiencia", valor: "FaRocket"},
    {nombre: "Ubicacion", valor: "FaMapMarkedAlt"},
    {nombre: "Email", valor: "MdAlternateEmail"},
    {nombre: "Idiomas", valor: "LuLanguages"},
    {nombre: "Telefono", valor: "FaMobileAlt"},
  ]

  return (
    <motion.div initial={{opacity:0}} animate={{
      opacity: 1,
      transition: { delay: 1.4, duration: 0.4, ease: "easeIn", }
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-10" 
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educacion</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre mi</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{data.datos.experience.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.datos.experience.description}</p>
              </div>
              <ScrollArea className="h-[800px]">                
                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                  {/* {experienceDb.map((item, index) => { */}
                {data.datos.experience.items.map((item, index) => {
                  return(
                    <li key={index} className="flex flex-col bg-[#232329] h-auto py-6 px-10 rounded-xl justify-center items-center lg:items-start gap-1 hover:bg-opacity-60">
                      <span className="text-accent">{item.date}</span>
                      <h3 className="text-xl max-w-[360px] min-h-[50px] text-center lg:text-left">{item.position}</h3>
                      <p className="text-white/60 text-center lg:text-left">{item.company}</p>
                      <div>
                        {/* dot */}
                        {item.functions.map((func, index) => {
                          return(
                            <div key={index} className="flex items-center gap-2">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{func}</p>
                            </div>
                        )
                        })}
                        
                      </div>
                    </li>
                    )})}
                </ul>
              </ScrollArea>            
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{data.datos.education.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.datos.education.description}</p>
              </div>
              <ScrollArea className="h-[800px]">
                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                {data.datos.education.items.map((item, index) => {
                  return(
                    <li key={index} className="flex flex-col bg-[#232329] h-auto py-6 px-10 rounded-xl justify-center items-center lg:items-start gap-1 hover:bg-opacity-60">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex-1">
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[50px] text-center lg:text-left">{item.grade}</h3>
                          <div key={index} className="flex items-center gap-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-center lg:text-left">{item.school}</p>
                          </div>
                      </div>
                      <div>
                        <Image 
                          src={item.img} 
                          alt="foto" 
                          //layout="fill" 
                          width={100}
                          height={100}
                          priority 
                          quality={100} 
                          className="object-contain" />
                        </div>
                      </div>                     
                    </li>
                    )})}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full ">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{data.datos.education.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.datos.education.description}</p>
            </div>
              <ScrollArea className="h-[800px]">
                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                  {/* ASIGNAR LOS ICONOS, SOLO RECIBE EL NOMBRE DEL COMPONENTE DESDE EL JSON */}
                {data.datos.skillsList.map((skill, index) => {
                    return(
                      <div key={index} className="flex flex-col gap-4 h-auto">
                        <h2 className="text-4xl font-bold my-10 text-center lg:text-left text-accent">{skill.title}</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {skill.skills.map((item, index) => {
                            const result = tecnologias.find(tecnologia => tecnologia.nombre === item.name)
                            const nombreComponente = result.valor                    
                            return(
                              
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                      <div key={index} className="text-6xl group-hover:text-accent transition-all duration-300">
                                      <div className='flex justify-center'> {iconos[nombreComponente]} </div>
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-center">{item.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </ul>
              </ScrollArea>              
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{data.datos.about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {data.datos.about.description2.map((parrafo, index) => {
                    return(
                      <p key={index} className="p-2">{parrafo}</p> 
                    )
                  })}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
                  {data.datos.about.info.map((item, index) => {
                    const result = aboutIcons.find(aboutIcon => aboutIcon.nombre === item.fieldName)
                    const nombreComponente = result.valor
                    
                    return(
                      <li key={index} className="flex  items-center gap-3 ">
                        <span className="w-14 h-14 rounded-full text-xl bg-[#232329] text-accent flex items-center justify-center">
                          {iconos[nombreComponente]}
                        </span>
                        <div>
                          <h4 className="text-md font-semibold text-white/60">{item.fieldName}</h4>
                          <p className="text-sx font-bold text-white">{item.fieldValue}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>                
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default About