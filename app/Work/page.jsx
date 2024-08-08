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
import ProjectCard from "../../components/ProjectCard";

//data
import datos from "../../datos.json"


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
const projectunique = [

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
]

const projectsJson = datos.datos.proyectos
const reverseJson = [...projectsJson].reverse();
const Work = () => { 

  const [project, setProject] = useState(projects[0]);



  return (
    <motion.section
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1, transition:{ delay:1.4, duration: 0.4, ease:"easeIn"} }}
      className="min-h-[80vh] flex flex-cols-2 justify-center py-12 xl:px-0"
    >
      <div className="border grid grid-cols-1 xl:grid-cols-2 gap-5 mx-20 mb-40">
       {reverseJson.map((project, index) => {
          return(
            <ProjectCard key={index} project = {project} />
          )
        })}
        
      </div>
    </motion.section>
  )
}

export default Work

