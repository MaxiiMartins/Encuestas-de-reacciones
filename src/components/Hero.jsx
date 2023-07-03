import apoyar from "../assets/apoyar.svg"
import celebrar from "../assets/celebrar.svg"
import encantar from "../assets/encantar.svg"
import interesar from "../assets/interesar.svg"
import hacer_gracia from "../assets/hacer_gracia.svg"
import recomendar from "../assets/recomendar.svg"
import { NavLink } from "react-router-dom"

const Hero = () => {

    return (
        <>
            <div className="relative w-full border-t-2 border-[#161B22] overflow-hidden text-white pt-20 pb-40 m-auto mb-28 flex justify-center text-center flex-col items-center z-1">
                <p className="heroElem text-lg font-medium pt-6 mb-4 z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF7170] to-[#FFE57F]"
                >Potencia tu alcance en <span className="font-semibold text-white" >Linked<span className="bg-sky-700 rounded text-white font-semibold px-1 ml-0.5" >In</span> </span> con encuestas de reacciónes</p>
                <h1 className="heroElem inline-block z-10 max-w-md lg:max-w-2xl relative text-5xl md:text-4xl lg:text-5xl tracking-tighter mb-10 font-bold heroElem">
                    ¡Crea experiencias <span className="text-transparent bg-clip-text bg-gradient-to-r gradientAnimado from-[#FF7170] to-[#FFE57F]" style={{ animationDuration: "5s" }} > interactivas </span>  y obtén <span style={{ animationDuration: "5s" }} className="text-transparent bg-clip-text gradientAnimado bg-gradient-to-r from-[#FF7170] to-[#FFE57F]" >valiosos</span> comentarios de tu audiencia!
                    <img
                        draggable={false}
                        className="reacciones w-16 top-[-80%] right-[5%] sm:top-[-90%] -z-0 sm:right-[170px]"
                        style={{ animationDelay: "0.4s" }}
                        src={encantar}
                    />
                    <img
                        draggable={false}
                        className="reacciones opacity-80 top-[105px] right-0 w-11"
                        style={{ animationDelay: "0.2s" }}
                        src={apoyar}
                    />
                    <img
                        draggable={false}
                        className="reacciones bottom-[-150%] right-[0%] -z-10 sm:right-[-20%] lg:right-[-50px] w-[100px] md:w-[200px]"
                        style={{ animationDelay: "0.3s" }}
                        src={hacer_gracia}
                    />
                    <img
                        draggable={false}
                        className="reacciones hidden -z-0 sm:block top-[80%] -left-[25%]"
                        style={{ animationDelay: "0.6s" }}
                        src={interesar}
                    />
                    <img
                        draggable={false}
                        className="reacciones hidden sm:block bottom-[90%] left-[-35%] w-36"
                        style={{ animationDelay: "0.4s" }}
                        src={apoyar}
                    />
                    <img
                        draggable={false}
                        className="reacciones hidden sm:block left-[150px] lg:left-[100px] bottom-[-144px]"
                        style={{ animationDelay: "0.5s" }}
                        src={encantar}
                    />
                    <img
                        draggable={false}
                        className="reacciones bottom-[-140%] right-[65%] sm:right-[45%]"
                        style={{ animationDelay: "0.6s" }}
                        src={celebrar}
                    />
                    <img
                        draggable={false}
                        className="reacciones right-[-70px] -z-0 sm:-right-[25%] bottom-[100%] w-32"
                        style={{ animationDelay: "0.7s" }}
                        src={recomendar}
                    />
                    <img
                        draggable={false}
                        className="reacciones right-[-70px] -z-0 sm:-right-16 top-[20px] "
                        style={{ animationDelay: "0.7s" }}
                        src={interesar}
                    />
                    <img
                        draggable={false}
                        className="reacciones hidden sm:block opacity-70 sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
                        src={hacer_gracia}
                    />
                    <img
                        draggable={false}
                        className="reacciones left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-50"
                        style={{ animationDelay: "0.9s" }}
                        src={recomendar}
                    />
                </h1>
                <NavLink to="/generador">
                    <div className="heroElem cursor-pointer md:p-[2.5px] p-0.5 rounded-full group bg-gradient-to-r from-[#FF7170] to-[#FFE57F] transition-colors duration-900 ease-in-out">
                        <div className="flex h-full w-full rounded-full items-center justify-center bg-[#0d1117] group-hover:bg-[#0d1117]/90 transition-opacity duration-900 ease-in-out">
                            <h1 className="font-bold whitespace-nowrap z-0 px-8 py-4 text-xl text-transparent bg-clip-text bg-gradient-to-r hover:from-[#FF7170] hover:to-[#FFE57F] from-white to-white transition-colors duration-900 ease-in-out">Crear encuesta</h1>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Hero