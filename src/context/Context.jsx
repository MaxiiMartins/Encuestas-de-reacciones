import { createContext, useContext, useState } from "react";
import { options } from './../components/reacciones';


const ReccionesContext = createContext();

export const useRecciones = () => {
  return useContext(ReccionesContext);
};

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [reacciones, setReacciones] = useState(structuredClone(options));
  const [titulo, setTitulo] = useState('¿Quien es tu favorito?')
  const [textoColor, setTextoColor] = useState("text-white")
  const [fondoColor, setFondoColor] = useState('#FFFFFF')
  const [alinearReaccion, setAlinearReaccion] = useState('justify-end')
  
  const modificarOpciones = (elemento, valor) => {
    switch (elemento) {
      case "titulo":
        setTitulo(valor)
        break;
      case "textoColor":
        setTextoColor(valor)
        break;
      case "fondoColor":
        setFondoColor(valor)
        break;
      case "alinearReaccion":
        setAlinearReaccion(valor)
        break;
    }
  }

  const resetearReaccion = () =>{
    setReacciones(structuredClone(options))
    setTitulo('¿Quien es tu favorito?')
    setTextoColor("text-white")
    setFondoColor('#FFFFFF')
    setAlinearReaccion('justify-end')
  } 

  const modificarReaccion = (reaccion, clave, valor) => {

    if (clave == "isShowing") {
      let count = 0;
      for (const key in reacciones) {
        // eslint-disable-next-line no-prototype-builtins
        if (reacciones.hasOwnProperty(key)) {
          if (reacciones[key].isShowing) {
            count++;
          }
        }
      }
      if (!valor && count == 2) return
    }
    const nuevoEstado = { ...reacciones }
    nuevoEstado[reaccion][clave] = valor
    setReacciones(nuevoEstado)
  }


  return (
    <ReccionesContext.Provider value={{
      estados: {
        reacciones,
        titulo,
        textoColor,
        fondoColor,
        alinearReaccion,
      },
      metodos: {
        modificarReaccion,
        modificarOpciones,
        resetearReaccion
      }
    }}>
      {children}
    </ReccionesContext.Provider>
  )
}
export default ContextProvider

