import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Desarrollador Junior</span>
            <h1 className="h1 mb-6">Hola! soy<br /><span className="text-accent">Miguel Sánchez</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Apasionado de la informática y la tecnología, siempre me gusto saber como funcionan las cosas e intentar mejorarlas o adaptarlas a mis necesidades. Hace unos años me interesé por la programación y descubrí una nueva pasión, así que decidí dedicarme a ella al completo.</p>
          
            {/* boton y RRSS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span className="text-accent">Consulta mi CV</span>
                <FiDownload className="text-xl text-accent" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
          {/* Foto */}
          <div>
            <Photo />
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default Home