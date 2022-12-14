import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hola, mi nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rodrigo Palomo
        </h1>
        <h2 className="text-4xl sm:text7xl font-bold text-[#8892b0]">
          Soy Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Me apasiona aplicar nuevas tecnologías, manteniendo el código limpio y
          reutilizable. Estoy enfocado en la parte de Front con React.js y
          Next.js pero me encanta la programación en general.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-900 hover:border-pink-600 duration-300">
          <Link to="work" smooth={true} duration={800}> View Work </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
