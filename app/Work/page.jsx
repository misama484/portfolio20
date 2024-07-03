"use client";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from "../../components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "../../components/ui/WorkSliderBtns"

//FIREBASE
import { doc, getDoc, setDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Database/FirebaseConfig';

const projects = [
  {
    id: 0,
    title: "Platformer",
    date: "",
    description:
      "Juego de plataformas desarrollado en Unity",
    image:
      "https://github.com/misama484/PlatFormer/raw/main/Captura%20de%20pantalla%202023-01-17%20111700.png",
    tags: ["Unity", "C#"],
    category: "game",
    github: "https://github.com/misama484/PlatFormer",
    webapp: "https://miguelsanchezdev.itch.io/pixelplatforms",
    member: [
      {
        name: "Miguel Sanchez",
        img: "https://avatars.githubusercontent.com/u/86913656?v=4",
        linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
        github: "https://github.com/misama484",
      },
    ],
  },

  {
   id: 1,
   title: "Gestion de Biblioteca",
   date: "",
   description:
     "Pequeña aplicacion para la gestion de una biblioteca, hecha en Java para entornos Windows",
   image:
     "https://github.com/misama484/AAD/blob/AEVT4_Gest_Biblio_Mongo/Captura%20de%20pantalla%202023-01-17%20112455.png?raw=true",
   tags: [
     "Java",
     "MongoDB",
     "Windows"
   ],
   category: "windows",
   github: "https://github.com/misama484/AAD/tree/AEVT4_Gest_Biblio_Mongo",
   webapp: "",
   member: [
      {
        name: "Miguel Sanchez",
        img: "https://avatars.githubusercontent.com/u/86913656?v=4",
        linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
        github: "https://github.com/misama484",
      },
    ]
  },

  {
    id: 2,
    title: "FlappyBird",
    date: "",
    description:
      "Divertido juego donde un lindo pajarraco atraviesa tuberias sumando puntos. Hecho en Unity para Android",
    image:
      "https://github.com/misama484/FlappyBird/blob/main/Captura%20de%20pantalla%202023-01-17%20110624.png?raw=true",
    tags: [
      "Unity",
      "C#",
      "Android"
    ],
    category: "android",
    github: "https://github.com/misama484/FlappyBird",
    webapp: "https://github.com/misama484/FlappyBird/blob/9e1882593cf5b119133610a8b91b8b57e407f23b/flappyFinal.apk",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },

   {
    id: 3,
    title: "Gestión de biblioteca",
    date: "",
    description:
      "Pequeña aplicación para la gestión de una biblioteca doméstica",
    image:
      "https://github.com/misama484/AAD/blob/AEVT4_Gest_Biblio_Mongo/Captura%20de%20pantalla%202023-01-17%20112455.png?raw=true",
    tags: [
      "Java",
      "MongoDB",
      "Windows"
    ],
    category: "Windows",
    github: "https://github.com/misama484/AAD/tree/AEVT4_Gest_Biblio_Mongo",
    webapp: "",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },

   {
    id: 4,
    title: "Shooter 3D",
    date: "",
    description:
      "Shooter FPS en 3d - En desarrollo -",
    image:
      "https://github.com/misama484/FPS-3D/blob/main/Capturadepantalla2022-12-23200511.png?raw=true",
    tags: [
      "Unity",
      "C#",
      "Windows"
    ],
    category: "Games",
    github: "https://github.com/misama484/FPS-3D",
    webapp: "",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },

   {
    id: 5,
    title: "Space Invaders",
    date: "",
    description:
      "Clasico juego de marcianitos",
    image:
      "https://github.com/misama484/SpaceInvadersScripts/blob/main/Capturadepantalla2023-01-17112142.png?raw=true",
    tags: [
      "Unity",
      "C#",
      "Android",
    ],
    category: "Games",
    github: "https://github.com/misama484/SpaceInvadersScripts",
    webapp: "",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },

   {
    id: 6,
    title: "Portfolio personal",
    date: "",
    description:
      "Codigo de este mismo portfolio, desarrollado en React, StyledComponents y MaterialUI",
    image:
      "https://github.com/misama484/PortFolioReact3/blob/main/CapturaPortfolio.png?raw=true",
    tags: [
      "React",
      "MUI",
      "StyledComponents",
    ],
    category: "Web",
    github: "https://github.com/misama484/PortFolioReact3",
    webapp: "https://miguelsanchez.dev",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },   

   {
    id: 7,
    title: "Quizz Harry Potter",
    date: "2023 - En desarrollo",
    description:
      "App desarrollada en React Native, con un pequeño juego de preguntas y una pequeña base de datos que se conecta a una API para mostrar informacion sobre los personajes de la saga y los hechizos",
    image:
      "https://raw.githubusercontent.com/misama484/hpquizz/master/imagesWeb/1.png?token=GHSAT0AAAAAACJRCOTH2MMGRWQ6DNETH33MZKTKGIA",
    tags: [
      "React Native",
      "MateriaUI",
      "React Native Paper",
    ],
    category: "Android",
    github: "https://github.com/misama484/hpquizz",
    webapp: "",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },

   {
    id: 8,
    title: "NotIces",
    date: "2023 - En desarrollo",
    description:
      "App desarrollada en React Native, muestra una seleccion de noticias filtradas por categorias ademas de una prediccion del tiempo.",
    image:
      "https://raw.githubusercontent.com/misama484/notices/master/ImagenesWeb/1.png?token=GHSAT0AAAAAACJRCOTHJKVNXXQZIJDA5DLUZKTJQXA",
    tags: [
      "React Native",
      "MateriaUI",
      "React Native Paper",
    ],
    category: "Android",
    github: "https://github.com/misama484/notices",
    webapp: "",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },

   {
    id: 9,
    title: "SimonSay",
    date: "2023 - En desarrollo",
    description:
      "App desarrollada en React, el mitico juego de SimonSay, utilizando ReactHooks y TailwindCSS.",
    image:
      "https://github.com/misama484/SimonSayReact/blob/main/src/assets/simonLogo.png?raw=true",
    tags: [
      "React",
      "TailwindCSS",
    ],
    category: "Web",
    github: "https://github.com/misama484/SimonSayReact",
    webapp: "https://simonsay.miguelsanchez.dev",
    member: [
       {
         name: "Miguel Sanchez",
         img: "https://avatars.githubusercontent.com/u/86913656?v=4",
         linkedin: "https://www.linkedin.com/in/sanchezmartinezmiguel",
         github: "https://github.com/misama484",
       },
     ]
   },
];

const Work = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [project, setProject] = useState(projects[0]);
  const [projectsDb, setProjectsDb] = useState([]);



  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  useEffect(() => {
    const fetchWorks = async() => {
      const querySnapshot = await getDocs(collection(db, "Proyectos"));
      const arrayWorks = [];
      querySnapshot.forEach((doc) => {
        arrayWorks.push({...doc.data()});
    });
    setProjectsDb(arrayWorks);
    //console.log(arrayWorks);
  }
  fetchWorks();  
  },);

  return (
    <motion.section
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1, transition:{ delay:1.4, duration: 0.4, ease:"easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {projectsDb.map((project, index) => {
              return(
                <div key={index} className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.id}</div>
                {/* project name */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.nombre}</h2>
                {/* project category */}
                <p className="text-white/60 capitalize">{project.category}</p>
                {/* project Description */}
                <p className="text-white/60">{project.descripcion}</p>
                {/* technologies */}
                <ul className="flex gap-4">
                  {project.tecnologias.map((tag, index) => (                  
                    <li key={index} className="text-xl text-accent">
                      {tag}
                      {/* quitar ultima coma */}
                      {index !== project.tecnologias.length -1 && ","}
                    </li>
                  ))}
                </ul>
                {/* Borde */}
                <div className="border border-white/20"></div>
                
                {/* Botones */}
                <div className="flex items-center gap-4">
                  {/* Boton Ver Proyecto */}
                  <Link href={""}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ver proyecto</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  
                  {/* Boton Github */}
                  <Link href={""}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Repositorio Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>              
                </div>
              </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </motion.section>
  )
}

export default Work


{/* --CODIGO GUARDADO--
  
  
  
  
*/}