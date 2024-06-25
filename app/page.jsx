"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'
import Typewriter from "typewriter-effect";


//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

//FIREBASE
import { doc, getDoc, setDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Database/FirebaseConfig';

const Home = () => {
  
  const [data, setData] = useState(null);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [aboutDb, setAboutDb] = useState([]);

  //useEffect que retorna los datos de About de la bd
  useEffect(() => {
    const fetchAbout = async() => {
      const querySnapshot = await getDocs(collection(db, "PortfolioDB"));
      const arrayAbout = [];
      querySnapshot.forEach((doc) => {
        arrayAbout.push({...doc.data()});
    });
    setAboutDb(arrayAbout);
    //console.log(arrayAbout);
  };
  fetchAbout();
  
  }, []);
  

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {aboutDb.map((item, index) => (
              <>
             <Typewriter
                className="text-2xl"
                options={{
                strings: item.cargos,
                autoStart: true,
                loop: true,
                
              }}
            />
            <h1 className="h1 mb-6">Hola! soy<br /><span className="text-accent">{item.name}</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">{item.description}</p>           
          
            {/* boton y RRSS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button onClick={() => window.open(item.curriculum)} variant="outline" size="lg" className="uppercase flex items-center gap-2 text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                <span className="">Consulta mi CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div></>
            ))}
          </div>
          
          {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>          
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home