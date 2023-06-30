import { NavLink } from "react-router-dom"


const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-transparent">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-gradient-to-r gradientAnimado from-[#FF7170] to-[#FFE57F] px-2 my-5 text-[#0d1117] text-base font-medium rounded">
        Página No Encontrada
      </div>

      <NavLink to="/">
        <div className="heroElem cursor-pointer p-0.5 rounded-full bg-gradient-to-r group hover:from-[#FF7170] hover:to-[#FFE57F] from-white to-white transition-colors duration-700  ease-in-out">
          <div className="flex h-full w-full rounded-full items-center justify-center bg-[#0d1117]">
            <h1 className="font-bold whitespace-nowrap z-0 px-4 py-2 text-base text-transparent bg-clip-text bg-gradient-to-r group-hover:from-[#FF7170] group-hover:to-[#FFE57F] from-white to-white transition-colors duration-700  ease-in-out">Ir al inicio</h1>
          </div>
        </div>
      </NavLink>
    </main>
  )
}

export default NotFound