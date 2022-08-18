import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 text-center">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            {/* <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p> */}
            </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p className="hover:text-pink-600 duration-1000">
              Hola. Soy Rodrigo, encantado de conocerte. Por favor, echa un
              vistazo.
            </p>
          </div>
          <div>
            <p className="text-xl">
              Me divierte crear software que mejore la vida de quienes me
              rodean. Actualmente estoy haciendo proyectos para acentar
              conocimientos de los cuales voy aprendiendo por mi cuenta en
              internet, YouTube y Udemy. Aún estoy en búsqueda de mi primer
              trabajo en el sector IT, trabajo en el cual me pueda desarrollar
              profesionalmente y capacitarme para ser una excelente inversión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
