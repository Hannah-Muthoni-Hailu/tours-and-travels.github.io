import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Form from './components/Form'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewHR from './components/NewHR'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <NewHR/>
      <Form/>
      <Gallery/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
