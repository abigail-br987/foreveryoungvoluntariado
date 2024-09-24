import { Skeleton } from "@mui/material";
import Section from "./minicomponents/Section";
import logo from "/logo.png";
import photo1 from "/962163-foto-4.jpg";
import photo2 from "/photo2.jpeg";
import photo3 from "/photo3.jpg";
import photo4 from "/photo4.jpg";
import photo5 from "/photo5.png";
import photo6 from "/photo6.jpeg";
import photo7 from "/photo7.png";
import photo10 from "/photo10.png";
import photo11 from "/photo11.png";
import photo8 from "/photo8.png";
import photo9 from "/photo9.png";
import photo13 from "/photo13.jpg";
import photo14 from "/photo14.jpg";
import { BsInstagram } from "react-icons/bs";
import participante1 from "/participantes-01.png";
import participante2 from "/participantes-02.png";
import participante3 from "/participantes-03.png";
import participante4 from "/participantes-04.png";
import participante5 from "/participantes-05.png";
import participante6 from "/participantes-06.png";
import participante7 from "/participantes-07.png";
import participante9 from "/participantes-09.png";
import participante10 from "/participantes-10.png";
import participante14 from "/participantes-14.png";

import PersonCard from "./minicomponents/ParticipantCard";
import MapFY from "./minicomponents/MapFY";
const images = [
  { src: photo1, alt: "Image 1" },
  { src: photo2, alt: "Image 2" },
  { src: photo3, alt: "Image 3" },
  { src: photo4, alt: "Image 4" },
  { src: photo5, alt: "Image 5" },
  { src: photo6, alt: "Image 6" },
  { src: photo7, alt: "Image 7" },
  { src: photo8, alt: "Image 8" },
  { src: photo9, alt: "Image 9" },
];

const actividades = [
  {
    icono: "🌟",
    titulo: "Talleres y Charlas Interactivas",
    descripcion:
      "En la sala de espera, se ofrecen talleres y charlas dinámicas que informan e inspiran a los jóvenes sobre su salud y bienestar.",
  },
  {
    icono: "📱",
    titulo: "Concientización en Redes Sociales",
    descripcion:
      "Se realizan campañas de concientización en días especiales, promoviendo mensajes de salud y bienestar para los adolescentes.",
  },
  {
    icono: "🚀",
    titulo: "Proyectos Creativos",
    descripcion:
      "Se desarrollan proyectos nuevos que incluyen concursos y grupos, fomentando la creatividad y el compromiso en la comunidad.",
  },
  {
    icono: "📰",
    titulo: "Afiches y Difusión",
    descripcion:
      "Se crea y distribuye información importante mediante afiches en las paredes del hospital y en las redes sociales, asegurando mayor impacto.",
  },
];

const participants = [
  {
    name: "Abigail Briones",
    title: "Presidenta",
    description: "",
    imageSrc: participante1,
  },
  {
    name: "Lic. Katty Rojas",
    title: "Supervisora",
    description: "",
    imageSrc: participante14,
  },
  {
    name: "Leonardo",
    title: "Tesorero",
    description: "",
    imageSrc: participante9,
  },
  {
    name: "Fabrizio",
    title: "Secretario",
    description: "",
    imageSrc: participante3,
  },
  {
    name: "Camilo",
    title: "Miembro",
    description: "",
    imageSrc: participante10,
  },
  {
    name: "Camila",
    title: "Secretaria",
    description: "",
    imageSrc: participante5,
  },
  {
    name: "María",
    title: "Eventos",
    description: "",
    imageSrc: participante6,
  },
  {
    name: "Belén",
    title: "Eventos",
    description: "",
    imageSrc: participante7,
  },
  {
    name: "Michelle",
    title: "Miembro",
    description: "",
    imageSrc: participante2,
  },
];

const joinus = [
  {
    title: "🤝 Como Alianza",
    description:
      "Si eres una empresa u organización interesada en colaborar, contáctanos para explorar posibles alianzas y proyectos conjuntos. Estamos abiertos a trabajar en equipo. Correo: @abigailbrionesaranda@gmail.com",
    image: photo13,
  },
  {
    title: "🌟 Como Miembro",
    description:
      "Sé parte activa de nuestras iniciativas. Para participar, debes pasar por Servicio de Medicina del Adolescente y preguntar a la Lic. Katty Rojas de Consejería de Salud Sexual y Reproductiva sobre la posibilidad de unirse.",
    image: photo14,
  },
];

function LandingPage() {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-[#fefcf3]">
        <div className="max-w-screen-lg w-screen pb-8">
          <Section>
            <img src={logo} alt="ForeverYoung Logo" className="w-full p-10" />
            <p>
              ForeverYoung es la organización de voluntariado de Servicio de
              Medicina del Adolescente del Hospital del Niño de Breña, Lima,
              Perú.
            </p>
          </Section>
          <div className="my-7">
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full border-2 border-black rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-l"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="my-7">
            <h1>¿Qué hacemos?</h1>
            <p class="text-center mb-6">
              Nuestro objetivo es apoyar a los adolescentes y promover su salud
              sexual, integral, mental y física.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {actividades.map((actividad, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border-2 border-black bg-white"
                >
                  <h3>
                    {actividad.icono} {actividad.titulo}
                  </h3>
                  <p>{actividad.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2">¿Dónde Estamos?</h1>
          <Section>
            <p className="mb-4">
              Realizamos nuestras actividades en Servicio de Medicina del
              Adolescente en el Hospital del Niño, el cual brinda atención
              integral (médica, psicológica, nutricional, sexual y social).
            </p>

            <div className="flex flex-col">
              <div className="w-full h-96 my-3">
                <MapFY />
              </div>
            </div>
          </Section>

          <div className="flex space-x-4 my-4">
            <div className="flex-1 h-64 border-black border-2 rounded-lg">
              <img
                src={photo10}
                alt="Hospital"
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            <div className="flex-1 h-64 border-black border-2 rounded-lg">
              <img
                src={photo11}
                alt="Hospital"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="my-7">
            <h1 className="mb-2">¿Quiénes Somos?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {participants.map((participant, index) => (
                <PersonCard
                  key={index}
                  name={participant.name}
                  title={participant.title}
                  description={participant.description}
                  imageSrc={participant.imageSrc}
                />
              ))}
            </div>
          </div>
          <div></div>
          <Section>
            <p>
              Esta experiencia se desarrolla en el marco de los derechos que
              tienen los jóvenes a la SALUD, EDUCACIÓN Y PARTICIPACIÓN, con un
              enfoque de equidad, de derecho y diversidad. Trabajamos con los
              profesionales del equipo multidisciplinario en actividades
              preventivas de conductas de riesgo y de promoción de estilos de
              vida saludables con sus pares. Sistema organizado de adolescentes,
              que trabajan voluntariamente en el desarrollo de actividades
              dirigidos a adolescentes. Cada adolescente al formar parte de
              ForeverYoung, contribuye al desarrollo del servicio
            </p>
          </Section>
          <div className="my-7">
            <h1 className="mb-2">Unete a ForeverYoung</h1>
            <div className="flex justify-center space-x-4">
              {joinus.map((item, index) => (
                <div
                  key={index}
                  className="w-full p-4 border-2 border-black rounded-lg bg-white"
                >
                  <div className="w-full h-96 border-2 border-black rounded-lg ">
                    <img
                      src={item.image}
                      alt={`Image for ${item.title}`}
                      className="w-full h-full object-cover object-top rounded-lg"
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="mt-2">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1>¡Síguenos!</h1>

          <Section>
            <p>
              Esté al tanto de nuestros proyectos. Actualmente estamos
              trabajando en la Semana de la prevención del embarazo y el
              proyecto de Cartas de Esperanza!
            </p>
            <div className="flex items-center flex-row space-x-2 justify-center">
              <BsInstagram className="w-6 h-6" />
              <a
                href="https://www.instagram.com/forever_young_voluntariado/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold hover:underline"
              >
                <p> Instagram: @forever_young_voluntariado </p>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
