import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutMe from "./components/pages/AboutMe"
import Experience from "./components/pages/Experience"
import Projects from "./components/pages/Projects"
import ContactMe from "./components/pages/ContactMe"
import Home from "./components/pages/Home"


const App = () => {
  return (
    <>
      <NavBar />
        <div>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/ContactMe' element={<ContactMe />} />
          </Routes>
        </div>
      </>
  )
}

export default App
