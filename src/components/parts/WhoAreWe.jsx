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
      name: "Abigail Briones",
      title: "Presidenta",
      description: "Hola! IG: @abigail_br987",
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
  

function WhoAreWe () {
    return (
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
    )
}

export default WhoAreWe