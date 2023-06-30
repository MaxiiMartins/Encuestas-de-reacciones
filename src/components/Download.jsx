import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

const Download = () => {

  const downloadImage = () => {
    const title = `encuesta-${Date.now()}`
    const componentHTML = document.getElementById("preview")
    domtoimage.toBlob(componentHTML).then((blob) => {
      saveAs(blob, title)
    })
      .catch((err) => console.log(err))
  }

  return (
    <div onClick={downloadImage}  className="cursor-pointer p-0.5 gradientAnimado rounded-full max-w-[180px] items-center bg-gradient-to-r group from-[#70ff72] to-[#c8ff7f] transition-all  ease-linear">
      <div className="flex h-full w-full rounded-full items-center justify-center bg-[#0d1117] hover:bg-[#0d1117]/90">
        <h1 className="font-semibold whitespace-nowrap z-0 px-4 py-2 text-xl text-transparent bg-clip-text bg-gradient-to-r group-hover:from-[#70ff72] group-hover:to-[#c8ff7f] transition-all sease-linear">Descargar</h1>
      </div>
    </div>
  )
}

export default Download