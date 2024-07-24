"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue  } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Telefono',
    description: '666777888',
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'contacto@miguelsanchez.dev',
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Direccion',
    description: 'Alzira, Valencia',
  },
  
]

const Contact = () => {
  //manejo del mensaje para envio
  const [formData, setFormData] = useState({
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    servicio:'',
    mensaje:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(name, value)
    console.log(formData.nombre)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if(response.ok){
        alert("mensaje enviado")
      } else {
        alert("error al enviar el mensaje")
      }
    }catch(error){
      console.error("ERROR", error)
      alert("ERROR", formData)
    }
  }


  return (
    <motion.section
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1, transition:{ delay:1.4, duration: 0.4, ease:"easeIn"} }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* fromulario */}
          <div className="xl:h-[54%] ordere-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}> 
              <h3 className="text-4xl text-accent">Contactame!</h3>
              <p className="text-white/60">Si deseas contactar conmigo para solicitar un trabajo, 
              colaboracion o simplemente saludar, no lo dudes, te respondere lo antes posible.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Nombre" onChange={handleChange} />
                <Input type="lastname" placeholder="Apellido" onChange={handleChange} />
                <Input type="email" placeholder="Email" onChange={handleChange} />
                <Input type="phone" placeholder="Telefono" onChange={handleChange} />
                
              </div>
              {/* Select service */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder= "Selecciona un servicio"/>                  
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecciona un servicio</SelectLabel>
                    <SelectItem value="1">Desarrollo Web</SelectItem>
                    <SelectItem value="2">Tienda online</SelectItem>
                    <SelectItem value="3">App Movil</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TextArea */}
              <Textarea placeholder="Mensaje" onChange={handleChange} value={formData.mensaje}/>
              <Button size="md" className="max-w-40">Enviar</Button>
            </form>
            
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) =>{
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>                                       
                      <h3 className="text-xl">{item.description}</h3>
                    </div>                     
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}


export default Contact