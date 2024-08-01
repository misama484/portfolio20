"use client"
import CountUp from "react-countup";
import data from "../datos.json"

const projects = data.datos.proyectos;
const numberOfProjects = projects.length;
console.log(numberOfProjects)
const stats = [
  {
    number: "3",
    text: "Años desarrollando"
  },
  {
    number: numberOfProjects,
    text: "Proyectos completados"
  },
  {
    number: 3,
    text: "Certificaciones"
  },
  
]

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center justify-center py-16">
        <h2 className="h2 mb-8">Mis estadísticas</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <CountUp end={stat.number} duration={10} className="text-4xl font-bold text-accent" />
              <p className="text-white/80">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats