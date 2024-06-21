"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AdminPage = () => {
  return (
    <div className="xl:h-[54%] ordere-2 xl:order-none">
      <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"> 
        <h3 className="text-4xl text-accent">Contactame!</h3>
        <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Similique deleniti, beatae architecto voluptatibus 
          distinctio error explicabo itaque nostrum accusamus ipsam eos nobis 
          illo qui minima fugit rerum perspiciatis earum. Consequuntur?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <Input type="firstname" placeholder="Nombre" />
            <Input type="lastname" placeholder="Apellido"/>
            <Input type="email" placeholder="Email"/>
            <Input type="phone" placeholder="Telefono"/>                
          </div>
          {/* TextArea */}
          <Textarea placeholder="Mensaje"/>
          <Button size="md" className="max-w-40">Enviar</Button>
        </form>            
      </div>
  )
}

export default AdminPage