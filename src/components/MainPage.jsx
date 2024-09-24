import WhoAreWe from "./parts/WhoAreWe";
import PhotoGrid from "./parts/PhotoGrid";
import PhotoGrid2 from "./parts/PhotoGrid2";
import FollowUs from "./parts/FollowUs";
import WhatDoWeDo from "./parts/WhatDoWeDo";
import WhereAreWe from "./parts/WhereAreWe";
import MoreInfo from "./parts/MoreInfo";
import JoinUs from "./parts/JoinUs";
import Landing from "./parts/Landing";
import { Link } from "react-scroll";
import logo2 from "/logo2.png";
import Testimonials from "./Testimonials";

import ArticleGrid from "./ArticleGrid";
const navItems = [
  { name: "Proyectos", to: "what-do-we-do" },
  { name: "Dónde", to: "where-are-we" },
  { name: "Home", to: "landing", photo: logo2 },
  { name: "Nosotros", to: "who-are-we" },
  { name: "Unete", to: "join-us" },
];

function Navbar() {
  return (
    <nav className="bg-deep_green p-2 fixed w-full top-0 border-dark_blue border-b-2 z-10">
      <ul className="flex space-x-7 justify-center items-center cursor-pointer">
        {navItems.map((item, index) => (
          <li key={index} className="font-serif flex items-center">
            {item.name === "Home" ? (
              <Link
                activeClass="active"
                offset={-100}
                smooth
                spy
                to={item.to}
                duration={500}
                className="flex items-center"
              >
                <img src={item.photo} alt="Home Logo" className="h-10 w-10" />
              </Link>
            ) : (
              <Link
                activeClass="active"
                offset={-70}
                smooth
                spy
                to={item.to}
                duration={500}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MainPage() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center bg-[#fefcf3] mt-16">
        <div className="max-w-screen-lg w-screen pb-8">
          <div id="landing">
            <Landing />
          </div>

          <PhotoGrid />

          <div id="what-do-we-do">
            <WhatDoWeDo />
          </div>

          <div id="where-are-we">
            <WhereAreWe />
          </div>

          <PhotoGrid2 />

          <div id="more-info">
            <MoreInfo />
          </div>
          
          <div id="who-are-we">
            <WhoAreWe />
          </div>

          <div id="join-us">
            <JoinUs />
          </div>

          <Testimonials />

          <div id="follow-us">
            <FollowUs />
          </div>

          <div>
            <ArticleGrid />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
