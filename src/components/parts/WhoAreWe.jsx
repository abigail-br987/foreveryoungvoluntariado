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
import PersonCard from "../minicomponents/ParticipantCard";

const participants = [
  {
    name: "Lic. Katty Rojas",
    title: "Supervisora",
    description: "",
    imageSrc: participante14,
  },
  {
    name: "Abigail Briones",
    title: "Presidenta",
    description: "Hola! IG: @abigail_br987",
    imageSrc: participante1,
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
    name: "María Gonzales",
    title: "Eventos",
    description: "",
    imageSrc: participante6,
  },
  {
    name: "Belén Euribe",
    title: "Eventos",
    description: "",
    imageSrc: participante7,
  },
  {
    name: "Mishell Veramendi",
    title: "Miembro",
    description: "",
    imageSrc: participante2,
  },
];

function WhoAreWe() {
  return (
    <div className="my-7 max-sm:block md:flex md:flex-row max-sm:flex-col max-sm:items-center">

      <h1 className="md:w-auto md:[writing-mode:vertical-lr] md:rotate-180 text-3xl font-bold md:mr-4 max-sm:mb-4">
        ¿QUIÉNES SOMOS?
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
  );
}

export default WhoAreWe;
