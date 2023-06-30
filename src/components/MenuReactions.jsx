import { useRecciones } from "../context/Context";

const MenuReactions = () => {
    const { estados, metodos} = useRecciones()
    const claves = Object.keys(estados.reacciones)

    return (
        <div className='flex flex-col gap-5 p-4 max-w-[450px] bg-transparent border-2 border-white rounded-xl' >
            <label className="block text-xl min-[1400px]:text-2xl text-center font-semibold text-gray-900 dark:text-gray-400">Reacciones</label>
            <div className='flex flex-wrap gap-2 my-2 justify-center '>
                {
                    claves.map((element, i) => (
                        <div key={i} className={"w-24 min-[1200px]:w-32 h-auto flex flex-col items-center p-1 rounded-xl bg-transparent"}>
                            <label htmlFor={element}
                            className='relative cursor-pointer'
                            >
                                <input id={element} checked={estados.reacciones[element].isShowing} onChange={(e) => {console.log(estados.reacciones[element].bgColor); metodos.modificarReaccion(element, "isShowing", e.target.checked)}} type="checkbox" className="appearance-none w-4 h-4 my-2 check-box-1 rounded-full border-2 border-white  bg-transparent" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 78.369 78.369"
                                    xmlSpace="preserve"
                                    className='absolute left-1 top-1 opacity-0 transition w-4 h-4 fill-orange-400 check-1'
                                >
                                    <path d="M78.049 19.015L29.458 67.606a1.094 1.094 0 01-1.548 0L.32 40.015a1.094 1.094 0 010-1.547l6.704-6.704a1.095 1.095 0 011.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 011.548 0l6.703 6.704a1.094 1.094 0 010 1.548z" />
                                </svg>
                            </label>
                            <img className=" w-8 min-[1400px]:w-12 -z-0 " style={{ animationDelay: "0.4s" }} src={estados.reacciones[element].icon} draggable={false} />
                            <div className="relative h-6 text-white bg-transparent mb-5 mx-2">
                                <input
                                    autoComplete='off'
                                    id="value"
                                    type="text"
                                    name="email"
                                    placeholder='texto'
                                    value={estados.reacciones[element].label}
                                    disabled={!estados.reacciones[element].isShowing}
                                    onChange={(e) => metodos.modificarReaccion(element, "label", e.target.value)} //reaccion,clave, valor
                                    className={`h-full w-full border text-center my-2 text-sm font-medium disabled:bg-white/10 -z-0 ${estados.reacciones[element].isShowing ? "border-orange-400":`border-gray-300`} bg-transparent px-2 transition-all outline-none rounded-md`}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuReactions