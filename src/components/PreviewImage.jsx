import { useRecciones } from "../context/Context";


const PreviewImage = () => {
    const { estados, metodos } = useRecciones()
    const claves = Object.keys(estados.reacciones)

    const handleImageUpload = async (event, element) => {
        try {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                metodos.modificarReaccion(element, "bgImage", reader.result)
            };
            reader.onerror = () => {
                console.log("error")
            };
            reader.readAsDataURL(file);
        } catch (error) {
            console.log("error al cargar imagen")
        }
    };

    const quitarFondo = (element) => metodos.modificarReaccion(element, "bgImage", undefined)

    return (
        <div id="preview" data-aos-delay="500" data-aos="fade-right" data-aos-offset="200" className={`w-[650px] min-w-[650px] h-[500px] relative bg-cover bg-center bg-white select-none`}
            style={{ background: estados.fondoColor }}>
            <h1 className={`absolute z-40 ${estados.titulo.length >= 34 ? "text-3xl" : estados.titulo.length >= 28 ? "text-4xl" : "text-5xl"} font-bold mx-auto ${estados.textoColor} ${estados.textoColor == "text-white" ? "drop-shadow-[3px_3px_3px_rgba(0,0,0,1)]" : "drop-shadow-[3px_3px_3px_rgba(255,255,255,1)]"} my-8 left-0 right-0 text-center`}>
                {estados.titulo}
            </h1>
            <div className="flex flex-row justify-around h-full" >
                {claves.map((element, i) => estados.reacciones[element].isShowing && (
                    <div key={i}
                        className={`bg-cover -z-0 flex flex-col w-full h-full group relative ${estados.alinearReaccion} cursor-pointer items-center`}>
                        <div className={`absolute eliminar rounded-full px-4 py-2 text-red-500 top-60 text-center text-xl bg-red-900/80 font-semibold ${estados.reacciones[element].bgImage ? "group-hover:opacity-100 z-[99999]" : "-z-30"} opacity-0 transition-opacity duration-400 ease-linear `} onClick={() => estados.reacciones[element].bgImage ? quitarFondo(element) : null} >
                            eliminar fondo
                        </div>
                        <label
                            htmlFor={element + i}
                            style={{ backgroundImage: `url(${estados.reacciones[element].bgImage})` }}
                            className={`bg-cover -z-0 bg-center w-full h-full flex flex-col relative ${estados.alinearReaccion} cursor-pointer hover:bg-black/40 hover:opacity-90 items-center py-4 pb-6`}>
                            <div className='py-2 px-1' >
                                <input id={element + i} onChange={(e) => handleImageUpload(e, element)} type="file" accept="image/*" className={"h-0 w-0 opacity-0"} />
                                <img draggable={false}
                                    style={{
                                        filter: 'drop-shadow(3px 0 0 white) drop-shadow(0 3px 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 -3px 0 white)'
                                    }}
                                    className="w-[110px] z-40 h-auto max-w-full" src={estados.reacciones[element].icon} alt={`${element}`} />
                            </div>
                            <p className={`text-xl w-full ${estados.textoColor} z-40 ${estados.textoColor == "text-white" ? "drop-shadow-[3px_3px_3px_rgba(0,0,0,1)]" : "drop-shadow-[3px_3px_3px_rgba(255,255,255,1)]"} font-semibold`} >{estados.reacciones[element].label}</p>

                        </label>
                    </div>))}
            </div>
        </div>

    )
}

export default PreviewImage