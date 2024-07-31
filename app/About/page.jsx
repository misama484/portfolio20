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
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" 
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.datos.about.description}</p>
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


/*

              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">Skills adquiridas</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">Skills adquiridas en mi desarrollo profesional, tanto en los estudios como en el ambito autodidacta</p>
              </div>                
                <div>
                  {skillsList.map((skill, index) => {
                    return(
                      <div key={index} className="flex flex-col gap-4 h-auto">
                        <h2 className="text-4xl font-bold my-10 text-center lg:text-left text-accent">{skill.title}</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {skill.skills.map((item, index) => {
                            return(
                              <div key={index} className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 items-center gap-2 hover:text-accent">
                                <div className="w-12 h-12 rounded-full bg-[#232329] text-accent flex items-center justify-center gap-2">{item.image}</div>
                                <p className="p-3 text-center">{item.name}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}

                </div>

                ----------------------
                <ScrollArea className="h-[800px]">
                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                {skillsList.map((skill, index) => {
                    return(
                      <div key={index} className="flex flex-col gap-4 h-auto">
                        <h2 className="text-4xl font-bold my-10 text-center lg:text-left text-accent">{skill.title}</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {skill.skills.map((item, index) => {
                            return(
                              <div key={index} className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 items-center gap-2 hover:text-accent">
                                <div className="w-12 h-12 rounded-full bg-[#232329] text-accent flex items-center justify-center gap-2">{item.image}</div>
                                <p className="p-3 text-center">{item.name}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </ul>
              </ScrollArea>

              ----------------------
              {EDUCATION}
              <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                {education.items.map((item, index) => {
                  return(
                    <li key={index} className="flex flex-col bg-[#232329] h-auto py-6 px-10 rounded-xl justify-center items-center lg:items-start gap-1 hover:bg-opacity-60">
                      <span className="text-accent">{item.date}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[50px] text-center lg:text-left">{item.grade}</h3>
                      <div key={index} className="flex items-center gap-2">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 text-center lg:text-left">{item.school}</p>
                            </div>
                      
                    </li>
                    )})}
                </ul>




const about = {
  title: "Sobre mi",
  description: "Soy un desarrollador junior apasionado de la informática y la tecnología, siempre me gusto saber como funcionan las cosas e intentar mejorarlas o adaptarlas a mis necesidades. Hace unos años me interesé por la programación y descubrí una nueva pasión, así que decidí dedicarme a ella al completo.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Miguel Sánchez",
      icon: <FaRegUser />
    },
    {
      fieldName: "Experiencia",
      fieldValue: "3+ años",
      icon: <FaRocket />
    },
    {
      fieldName: "Telefono",
      fieldValue: "666111222",
      icon: <FaMobileAlt />
    },
    {
      fieldName: "Email",
      fieldValue: "miguelsanchez.dev@gmail.com",
      icon: <MdAlternateEmail />
    },
    {
      fieldName: "Ubicación",
      fieldValue: "Valencia, España",
      icon: <FaMapMarkedAlt />
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Ingles, Castellano, Valenciano",
      icon: <LuLanguages />
    },
  ],
}
  const skills =  {
   skills: [
    {name: "HTML", icon: <FaHtml5 />},
    {name: "CSS", icon: <FaCss3 />},
    {name: "Javascript", icon: <FaJs />},
    {name: "React", icon: <FaReact />},
    {name: "Figma", icon: <FaFigma />},
    {name: "Node.js", icon: <FaNodeJs />},
    {name: "TailwindCSS", icon: <SiTailwindcss />},
    {name: "Next.js", icon: <SiNextdotjs />}
  ],
}

const experience = {
  title: "Mi experiencia",
  description: "Como desarrollador recien titulado, no dispongo todavia de una amplia experiencia laboral en el sector. Si que dispongo de unos cuantos años de experiencia laboral en el sector TI",

  items: [
    {
      icon: '/assets/assets/resume/badge.svg',
      company: "Ministerio de Defensa - Ejercito de Tierra",
      position: "Tecnico Informatico",
      date: "2008 - Actualidad",
      description: "Implantación y despliegue de redes desde 0, Planificación y despliegue de tendido y equipos, configuración de servidores y servicios para lograr la interoperabilidad total de los usuarios, reparación y mantenimiento de equipos y sistemas.",
      functions:[
        "Mantenimiento y Administración de Equipos informáticos.",
        "Mantenimiento y Administración de equipos de electrónica de red.",
        "Administración de sistemas.",
        "Implantación, configuración y despliegue de redes.",
        "Despliegue y mantenimiento de redes de F.O.",
        "Despliegue y mantenimiento de redes satelitales.",
        "AWS",
        "EC2",
      ]
    },
    {
      icon: '/assets/assets/resume/badge.svg',
      company: "Freelance",
      position: "Front-end developer",
      date: "2020 - Actualidad",
      description: "Desarrollo de aplicaciones web y páginas web para diferentes clientes, tanto en el frontend como en el backend.",
      functions:[
        "Mantenimiento y Administración de Equipos informáticos.",
        "Mantenimiento y Administración de equipos de electrónica de red.",
        "Administración de sistemas.",
        "Implantación, configuración y despliegue de redes.",
        "Despliegue y mantenimiento de redes de F.O.",
        "Despliegue y mantenimiento de redes satelitales.",
        "AWS",
        "EC2",
      ]
    },
    {
      icon: '/assets/assets/resume/badge.svg',
      company: "Freelance",
      position: "Front-end developer",
      date: "2020 - Actualidad",
      description: "Desarrollo de aplicaciones web y páginas web para diferentes clientes, tanto en el frontend como en el backend.",
      functions:[
        "Mantenimiento y Administración de Equipos informáticos.",
        "Mantenimiento y Administración de equipos de electrónica de red.",
        "Administración de sistemas.",
        "Implantación, configuración y despliegue de redes.",
        "Despliegue y mantenimiento de redes de F.O.",
        "Despliegue y mantenimiento de redes satelitales.",
        "AWS",
        "EC2",
      ]
    },
  ]
}

const education = {
  title: "Educacion y titulos",
  description: "Estos son los titulos y cursos que he realizado hasta la fecha",
  items:[
  {
    id: 0,
    img: "https://www.floridauniversitaria.es/wp-content/uploads/2022/10/logo-trans.png",
    school: "Florida Universitaria, Valencia",
    date: "Oct 2021 - May 2024",
    grade: "Tecnico Superior en Desarrollo de aplicaciones Multiplataforma",
    desc: "Tecnico superior en desarrollo de aplicaciones multiplataforma. He aprendido tecnologias como Java, React, Unity, etc; asi como Git, GitHub, Scrum, etc. ",
    degree: "",
  },
  {
    id: 1,
    img: "https://i0.wp.com/engineering.tiu.edu.iq/computer/wp-content/uploads/2019/01/ccna-routing-switching.jpg?fit=700%2C506&ssl=1",
    school: "Academia Cisco RT-21, Valencia",
    date: "Sep 2018 - Dic 2019",
    grade: "Cisco CCNA Routing & Switching",
    desc: "Certificacion Cisco CCNA R&S consegida en la academia Cisco RT-21 en Valencia",
    degree: "",
  },
  {
    id: 2,
    img: "https://www.ubt-uni.net/wp-content/uploads/2019/02/IT-ESSENTIALS.jpg",
    school: "Academia Cisco RT-21, Valencia",
    date: "Nov 2015 - Dic 2015",
    grade: "Curso Cisco IT Essentials",
    desc: "Certificacion Cisco IT Essentials conseguida en la academia Cisco RT-21 en Valencia.",
    degree: "",
  },
  {
    id: 2,
    img: "https://efiap.carm.es/web/imagen?ALIAS=IMGR4&IDIMAGEN=107736",
    school: "Academia online Instituno Nacional de la Administracón Pública - INAP",
    date: "Oct 2023 - Nov 2023",
    grade: "Curso Python avanzado",
    desc: "Curso de Puthon avanzado (Matplotlib, Numpy, persistencia de datos, Concurrencia, Interfaces, Web, Machine Learning).",
    degree: "",
  },
],
};



export const skillsList = [ 
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:<FaReact />,
      },
      {
        name: "HTML",
        image: <FaHtml5 />,
      },
      {
        name: "CSS",
        image: <FaCss3 />,
      },
      {
        name: "JavaScript",
        image: <FaJs />,
      },
      {
        name: "Bootstrap",
        image: <FaBootstrap />,
      },
      {
        name: "TailwindCSS",
        image: <SiTailwindcss />,
      },
      {
        name: "Next.js",
        image: <SiNextdotjs />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: <FaNodeJs />,
      },
      {
        name: "Python",
        image: <FaPython />,
      },
      {
        name: "Java",
        image: <FaJava />,
      },
      {
        name: "MySQL",
        image: <SiMysql />,
      },
      {
        name: "MongoDB",
        image: <SiMongodb />,
      },
      {
        name: "Firebase",
        image: <SiFirebase />,
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "Java",
        image: <FaJava/>,
      },
      {
        name: "React Native",
        image: <TbBrandReactNative />,
      },
      {
        name: "XML",
        image: <TbFileTypeXml />,
      },
      {
        name: "Android Studio",
        image: <SiAndroidstudio />,
      },
    ],
  },
  {
    title: "Otros",
    skills: [
      {
        name: "Git",
        image: <FaGit />,
      },
      {
        name: "GitHub",
        image: <FaGithub />,
      },
      {
        name: "Unity",
        image: <FaUnity />,
      },
      {
        name: "Figma",
        image: <FaFigma />,
      },
    ],
  },
  {
    title: "SysAdmin",
    skills: [
      {
        name: "Windows Server",
        image: <SiWindows95 />,
      },
      {
        name: "Linux",
        image: <FaLinux />
      },
      {
        name: "AWS",
        image: <FaAws />,
      },
    ],
  }
];
*/