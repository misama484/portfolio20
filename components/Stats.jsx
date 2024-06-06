"use client"
import CountUp from "react-countup";

const stats = [
  {
    number: 5,
    text: "Años de experiencia"
  },
  {
    number: 10,
    text: "Proyectos completados"
  },
  {
    number: 3,
    text: "Certificaciones"
  },
  {
    number: 100,
    text: "Clientes satisfechos"
  }
]

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center justify-center py-16">
        <h2 className="h2 mb-8">Mis estadísticas</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <CountUp end={stat.number} duration={5} className="text-4xl font-bold text-accent" />
              <p className="text-white/80">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats