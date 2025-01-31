import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/homepage'
import About from './pages/aboutpage'
import Experience from './pages/experience'
import Award from './pages/award'
import Interest from './pages/interest'
import Skill from './pages/skill'
import { Routes, Route } from 'react-router-dom'
import SideBar from './component/sidebar'

 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div>
    <div className="container-fluid">
            <div className="row flex-nowrap">
            <SideBar/>
                <div className="col py-3"></div>
    <Routes>
        <Route path="/homepage" element={<Home />}  />
        <Route path="/aboutpage" element={<About />}  />
        <Route path="/award" element={<Award />}  />
        <Route path="/experience" element={<Experience />}  />
        <Route path="/interest" element={<Interest />}  />
        <Route path="/skill" element={<Skill />}  />
     </Routes>
     </div>
            </div>
                </div>
    </>
  )
}
 
export default App