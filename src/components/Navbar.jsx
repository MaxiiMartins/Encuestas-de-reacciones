import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const rutas = [
        {
            title: "Inicio",
            pathname: "/"
        },
        {
            title: "Crear Encuesta",
            pathname: "/generador"
        },
    ]

    return (
        <div className="hidden w-full px-6 py-4 sm:block z-100 text-lg bg-transparent">
            <nav className="flex items-center justify-between">
                <NavLink to="/">
                    <li className="list-none font-bold cursor-pointer">
                        <div className="font-black text-2xl flex items-center" style={{ whiteSpace: "pre" }}>
                            {
                                "Encuestas de reacciones".split("").map((letter, index) => (<span key={index} className="text-transparent bg-clip-text bg-gradient-to-r hover:from-[#FF7170] from-white to-white hover:to-[#FFE57F] hover:-mt-2 transition-all duration-500 hover:duration-100 ">{letter}</span>))
                            }
                        </div>
                    </li>
                </NavLink>
                <ul className="flex items-center font-semibold space-x-10">
                    {
                        rutas.map((item, index) => (
                            <NavLink to={item.pathname} key={index}>
                                <li className={`list-none cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#FF7170] to-[#FFE57F]  ${item.pathname.toLowerCase() === location.pathname.toLowerCase()
                                        ? "opacity-100 "
                                        : "  from-white to-white hover:from-[#FF7170] hover:to-[#FFE57F] hover:opacity-80 transition-opacity"
                                        }`}
                                >
                                    {item.title}
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar