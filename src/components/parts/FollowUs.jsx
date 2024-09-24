import Section from "../minicomponents/Section"
import { BsInstagram } from "react-icons/bs"

function FollowUs(){
    return (
        <div className="my-7 text-center"> 
        <h1>¡Síguenos!</h1>

          <p>
          ¡Únete a nuestra comunidad y mantente al tanto de nuestros proyectos! 
          </p>
          <div className="flex items-center flex-row space-x-2 justify-center">
            <BsInstagram className="w-6 h-6" />
            <a
              href="https://www.instagram.com/forever_young_voluntariado/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              <p> Instagram: @forever_young_voluntariado </p>
            </a>
          </div>

        </div>
    )
}

export default FollowUs