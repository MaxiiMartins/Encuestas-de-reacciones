import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      <main className="md:p-5 w-full flex-1 text-center">
        <Navbar />
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
