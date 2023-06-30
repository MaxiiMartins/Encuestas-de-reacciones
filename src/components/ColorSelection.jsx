import { useRecciones } from '../context/Context'

const ColorSelection = () => {
    const { estados, metodos} = useRecciones()
    const handleColorChange = (e) => {
        const {value,id}=e.target
        metodos.modificarOpciones(id,value)
    }

    return (
        <section className={"flex flex-col items-center justify-center p-2 rounded-xl"}>
            <input onChange={handleColorChange} type={"color"} id={"fondoColor"} value={estados.fondoColor} className={"h-0 w-0 opacity-0"} />
            <section className={"relative cursor-pointer"}>
                <label htmlFor={"fondoColor"}>
                    <div style={{ backgroundColor: estados.fondoColor }} className={"w-10 absolute h-8 rounded-lg cursor-pointer"} />
                    <div style={{ backgroundColor: estados.fondoColor }} className={"w-10 blur-sm opacity-50 h-8 rounded-lg cursor-pointer"} />
                </label>
            </section>
        </section>
    )
}

export default ColorSelection