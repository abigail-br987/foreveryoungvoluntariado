import Section from "../minicomponents/Section";
import logo from "/logo.png";

function Landing() {
  return (
    <>
          <Section>
            <img src={logo} alt="ForeverYoung Logo" className="w-full p-10" />
            <p>
              ForeverYoung es la organización de voluntariado de Servicio de
              Medicina del Adolescente del Hospital del Niño de Breña, Lima,
              Perú.
            </p>
          </Section>
    </>
  );
}

export default Landing;
