import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Nav2 from "./components/Nav2"
import Community from "./components/Community"


const App = () => {
  

  return (
    <main className= "">
      <Nav2/>
       <Navbar/>
       <Hero/>
       <Highlights/>
       <Community/>
       <div className='pb-96'></div>
       <div className='pb-96'></div>
    </main>
  )
}

export default App
