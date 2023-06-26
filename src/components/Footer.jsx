import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col w-screen px-5 py-10 z-5 '>
            <div className="w-full mt-8 pt-8 sm:mt-4 sm:pt-4 text-center border-[#161B22] border-t-2 ">
                <p className="flex flex-col items-center justify-center ">
                    <div className="mt-1 font-medium text-sm text-white/80">
                        Realizado por <a href="mailto:maximartins45@gmail.com" className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7170] to-[#FFE57F] font-bold">Maxi Martins</a>
                    </div>
                </p>
            </div>
        </footer>
    )
}

export default Footer