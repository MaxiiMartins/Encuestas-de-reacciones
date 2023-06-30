import { useState } from 'react'
import ColorSelection from './ColorSelection'
import Download from './Download'
import { useRecciones } from '../context/Context'


const MenuOptions = () => {
    const { estados, metodos } = useRecciones()


    const [checkBottom, setCheckBottom] = useState(true)
    const [checkCenter, setCheckCenter] = useState(false)

    const [checkWhite, setCheckWhite] = useState(true)
    const [checkBlack, setCheckBlack] = useState(false)

    const handleChange = (e) => {
        const {id,name} = e.target
        if (id == "2" || id == "1") {
            setCheckCenter(id == "2")
            setCheckBottom(id == "1")
            metodos.modificarOpciones(name,id == "2" ? "justify-center" : "justify-end")
        } else {
            setCheckWhite(id == "3")
            setCheckBlack(id == "4")
            metodos.modificarOpciones(name,id == "4" ? "text-black" : "text-white")
        }
    }

    return (
        <div className='flex flex-col w-[28%] max-w-sm gap-12 p-4 bg-transparent border-2 items-center border-white rounded-xl' >
            <div className="h-10 text-white bg-transparent mb-5 text-center">
                <label htmlFor="value" className="block text-xl font-semibold text-gray-900 dark:text-gray-400">Titulo</label>
                <input
                    id="titulo"
                    type="text"
                    name="titulo"
                    autoComplete='off'
                    onChange={(e) => metodos.modificarOpciones(e.target.id,e.target.value.slice(0, 48))}
                    value={estados.titulo}
                    className="h-full w-auto border-b text-sm font-medium -z-0 border-gray-300 bg-transparent px-2 transition-all text-center outline-none"
                />
            </div>
            <div className="h-10 text-white bg-transparent mb-5 text-center">
                <label className="block text-xl font-semibold text-gray-900 dark:text-gray-400">Color de texto</label>
                <div className='flex flex-row w-full justify-evenly'>
                    <div className='flex flex-col items-center cursor-pointer' >
                        <label htmlFor="3" className='relative cursor-pointer' >
                            <input id='3' checked={checkWhite} onChange={handleChange} name="textoColor" type="checkbox" className="appearance-none w-4 h-4 my-2 check-box-1 rounded-full border-2 border-white  bg-transparent" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 78.369 78.369"
                                xmlSpace="preserve"
                                className='absolute left-1 top-1 opacity-0 transition w-4 h-4 fill-orange-400 check-1'
                            >
                                <path d="M78.049 19.015L29.458 67.606a1.094 1.094 0 01-1.548 0L.32 40.015a1.094 1.094 0 010-1.547l6.704-6.704a1.095 1.095 0 011.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 011.548 0l6.703 6.704a1.094 1.094 0 010 1.548z" />
                            </svg>
                        </label>
                        <label htmlFor="3" className='cursor-pointer'>
                            Blanco
                        </label>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer' >
                        <label htmlFor="4" className='relative cursor-pointer' >
                            <input id='4' checked={checkBlack} onChange={handleChange} name="textoColor" type="checkbox" className="appearance-none w-4 h-4 my-2 check-box-1 rounded-full border-2 border-white  bg-transparent" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 78.369 78.369"
                                xmlSpace="preserve"
                                className='absolute left-1 top-1 opacity-0 transition w-4 h-4 fill-orange-400 check-1'
                            >
                                <path d="M78.049 19.015L29.458 67.606a1.094 1.094 0 01-1.548 0L.32 40.015a1.094 1.094 0 010-1.547l6.704-6.704a1.095 1.095 0 011.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 011.548 0l6.703 6.704a1.094 1.094 0 010 1.548z" />
                            </svg>
                        </label>
                        <label htmlFor="4" className='cursor-pointer'>
                            Negro
                        </label>
                    </div>
                </div>
            </div>
            <div className="h-10 text-white bg-transparent mb-5 text-center">
                <label htmlFor="value" className="block text-lg font-semibold text-gray-900 dark:text-gray-400">Alinear Reacciones </label>
                <div className='flex flex-row w-full justify-evenly'>
                    <div className='flex flex-col items-center cursor-pointer' >
                        <label htmlFor="1" className='relative cursor-pointer' >
                            <input id='1' checked={checkBottom} onChange={handleChange} name="alinearReaccion" type="checkbox" className="appearance-none w-4 h-4 my-2 check-box-1 rounded-full border-2 border-white  bg-transparent" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 78.369 78.369"
                                xmlSpace="preserve"
                                className='absolute left-1 top-1 opacity-0 transition w-4 h-4 fill-orange-400 check-1'
                            >
                                <path d="M78.049 19.015L29.458 67.606a1.094 1.094 0 01-1.548 0L.32 40.015a1.094 1.094 0 010-1.547l6.704-6.704a1.095 1.095 0 011.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 011.548 0l6.703 6.704a1.094 1.094 0 010 1.548z" />
                            </svg>
                        </label>
                        <label htmlFor="1" className='cursor-pointer'>
                            Abajo
                        </label>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer' >
                        <label htmlFor="2" className='relative cursor-pointer' >
                            <input id='2' checked={checkCenter} onChange={handleChange} name="alinearReaccion" type="checkbox" className="appearance-none w-4 h-4 my-2 check-box-1 rounded-full border-2 border-white  bg-transparent" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 78.369 78.369"
                                xmlSpace="preserve"
                                className='absolute left-1 top-1 opacity-0 transition w-4 h-4 fill-orange-400 check-1'
                            >
                                <path d="M78.049 19.015L29.458 67.606a1.094 1.094 0 01-1.548 0L.32 40.015a1.094 1.094 0 010-1.547l6.704-6.704a1.095 1.095 0 011.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 011.548 0l6.703 6.704a1.094 1.094 0 010 1.548z" />
                            </svg>
                        </label>
                        <label htmlFor="2" className='cursor-pointer'>
                            Centro
                        </label>
                    </div>
                </div>
            </div>
            <div className="h-10 text-white bg-transparent mb-1 text-center">
                <label htmlFor="value" className="block text-xl font-semibold text-gray-900 dark:text-gray-400">Color de fondo</label>
                <ColorSelection />
            </div>
            <Download />
        </div>
    )
}

export default MenuOptions