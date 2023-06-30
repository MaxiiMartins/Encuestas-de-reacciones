import { useState } from 'react'
import PreviewImage from '../components/PreviewImage'
import MenuOptions from '../components/MenuOptions'
import MenuReactions from '../components/MenuReactions'
import { useRecciones } from '../context/Context'



const Generator = () => {
  
  return (
    <div data-aos="fade-left" className='grid gap-4 border-t-2 border-[#161B22]'>
      <div className='w-full text-center my-7'>
        <h1 className="text-center text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF7170] to-[#FFE57F]">Genera tu encuesta</h1>
        <h4 className="text-center text-lg py-2 text-white/60 "> Crea tu encuestas de reacciónes para compartir en Linkedin </h4>
      </div>
      <div className="flex flex-row gap-2 h-[500px] justify-center">
        <MenuOptions />
        <MenuReactions />
        <PreviewImage  />
      </div>
    </div>
  )
}

export default Generator