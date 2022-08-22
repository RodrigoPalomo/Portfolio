import React from "react";
import Photo from "../assets/photographPortfolio.jpeg";
import TodoList from "../assets/todoList.jpeg";
import Ecommerce from "../assets/ecommerce.jpeg";
import WeatherApp from "../assets/weatherApp.jpeg";
import Netflis from "../assets/Netflis.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">
            // Aquí puede ver algunos de mis proyectos realizados recientemente
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TodoList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Lista de Tareas con ReactJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://lista-tareas-six.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RodrigoPalomo/listaTareas" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Ecommerce con NextJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://ecommerce-stripe-sanity-five.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RodrigoPalomo/ecommerce_stripe_sanity" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Photo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Portfolio de fotógrafo con NextJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://nextjs-photographer-rjro3qobz-rodrigopalomo.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RodrigoPalomo/nextjs-photo" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Pronóstico con ReactJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://weather-app-phi-ten-80.vercel.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RodrigoPalomo/weather-app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Netflis})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Copia de Netflix con ReactJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://netflis-react-a6twmh68o-rodrigopalomo.vercel.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RodrigoPalomo/netflis-react" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;


// https://netflis-react-a6twmh68o-rodrigopalomo.vercel.app/