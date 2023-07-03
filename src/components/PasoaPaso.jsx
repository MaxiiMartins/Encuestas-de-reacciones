import { NavLink } from "react-router-dom"

const PasoaPaso = () => {
    return (
        <div >
            <div className="container bg-transparent mx-auto w-full h-full">
                <h3 data-aos="zoom-in" className="text-4xl font-bold uppercase text-white" >CÓMO CREAR UNA ENCUESTA DE REACCIONES</h3>
                <div className="relative wrap overflow-hidden m-10 p-10 h-full">
                    <div data-aos="fade-up-right" className="mb-4 flex justify-start items-center w-full">
                        <div className="bg-gradient-to-r from-[#FF7170] to-[#FFE57F] p-0.5 rounded-2xl text-left w-2/5" >
                            <div className="bg-[#0d1117] h-full w-full rounded-2xl p-8">
                                <h3 className="mb-3 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF7170] to-[#FFE57F]"> 1 <span className="text-2xl text-white">Título de la encuesta</span></h3>
                                <p className="text-lg leading-snug tracking-wide text-opacity-100">
                                    Agrega un título que describa claramente el propósito de la encuesta.
                                </p>
                                <p className="text-lg leading-snug tracking-wide" > Por ejemplo: <span className="text-clip bg-clip-text text-transparent bg-gradient-to-r from-[#FF7170] to-[#FFE57F] font-semibold" >{'¿Quien es tu favorito?'}</span></p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="mb-4 flex justify-end items-center w-full">
                        <div className="bg-gradient-to-r from-[#FF7170] to-[#FFE57F] p-0.5 rounded-2xl text-left w-2/5" >
                            <div className="bg-[#0d1117] h-full w-full rounded-2xl p-8">
                                <h3 className="mb-3 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF7170] to-[#FFE57F]"> 2 <span className="text-2xl text-white">Cambiar color de fondo</span></h3>
                                <p className="text-lg leading-snug tracking-wide ">
                                    Contaras con una opcion donde podras modificar el color de fondo de la imagen. <span className="text-white/60" >Este paso es opcional</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* left timeline */}
                    <div data-aos="fade-up-right" className="mb-4 flex justify-start items-center w-full">
                        <div className="bg-gradient-to-r from-[#FF7170] to-[#FFE57F] p-0.5 rounded-2xl text-left w-2/5" >
                            <div className="bg-[#0d1117] h-full w-full rounded-2xl p-8">
                                <h3 className="mb-3 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF7170] to-[#FFE57F]"> 3 <span className="text-2xl text-white">Opciones de reacciones</span></h3>
                                <p className="text-lg leading-snug tracking-wide  text-opacity-100">
                                    Utiliza las opciones de reacciones de LinkedIn, como <span className="text-[#378fe9] font-semibold" >Recomendar</span>, <span className="text-[#6dae4f] font-semibold">Celebrar</span>, <span className="text-[#df704d] font-semibold"> Encantar</span>, <span className="text-[#f5bb5c] font-semibold"> Interesar</span>, etc. Asegúrate de que los encuestados puedan seleccionar al menos dos opciónes de reacción para poder reaccionar a la pregunta o afirmación.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="mb-4 flex justify-end items-center w-full">
                        <div className="bg-gradient-to-r from-[#FF7170] to-[#FFE57F] p-0.5 rounded-2xl text-left w-2/5" >
                            <div className="bg-[#0d1117] h-full w-full rounded-2xl p-8">
                                <h3 className="mb-3 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF7170] to-[#FFE57F]" > 4 <span className="text-2xl text-white">Alinear reacciones </span></h3>
                                <p className="text-lg leading-snug tracking-wide  text-opacity-100">
                                    En este paso, podrás seleccionar la posición en la que deseas que aparezcan las opciones de reacción en tu encuesta. <span className="text-white/60 " >Por defecto se mostrara abajo</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-right" className="mb-4 flex justify-start items-center w-full">
                        <div className="bg-gradient-to-r from-[#FF7170] to-[#FFE57F] p-0.5 rounded-2xl text-left w-2/5" >
                            <div className="bg-[#0d1117] h-full w-full rounded-2xl p-8">
                                <h3 className="mb-3 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF7170] to-[#FFE57F]"> 5 <span className="text-2xl text-white">¡Comparte y genera interaciones!</span></h3>
                                <p className="text-lg leading-snug tracking-wide  text-opacity-100">
                                    Cuando la encuesta esté terminado, haz clic en <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#70ff72] to-[#c8ff7f]" >«Descargar»</span> para obtener la encuesta que has creado en formato png.
                                </p>
                                <p className="text-lg leading-snug tracking-wide  text-opacity-100">
                                    Compártelo con tu red de <span className="font-semibold text-white" >Linked<span className="bg-sky-700 rounded text-white font-semibold px-1 ml-0.5" >In</span> </span> y aumenta la visibilidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-8 -mx-8 p-0.5 bg-gradient-to-r from-[#FF7170] to-[#FFE57F]">
                    <div data-aos="zoom-in" className="mx-auto py-28 text-center px-4 text-[#0d1117]">
                        <h3 className="text-4xl font-bold uppercase" >¿ESTAS PREPARADOS? ¡VAMOS!</h3>
                        <div className="mx-auto  mt-5 mb-0 leading-7 max-w-lg text-center font-medium" >
                            <p className="text-[#0d1117] text-xl font-medium" >
                                Es una <span className="font-bold" > herramienta gratuita </span> cuyo objetivo es ayudar a <span className="font-bold" > aumentar la visibilidad</span> de tus publicaciones y conseguir conexiones significativas.
                            </p>
                        </div>
                        <div className="flex flex-col max-w-3xl justify-center items-center mt-8 mx-auto mb-auto">
                            <NavLink to="/generador">
                                    <div className="flex h-full w-full rounded-full items-center justify-center bg-white border-[3px] border-[#0d1117] transition-transform duration-900 ease-in-out shadow-lg hover:scale-110 shadow-[#0d1117]">
                                        <h1 className="font-bold whitespace-nowrap z-0 px-8 py-4 text-xl transition-colors duration-900 ease-in-out">Crear encuesta</h1>
                                    </div>
                            </NavLink>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default PasoaPaso