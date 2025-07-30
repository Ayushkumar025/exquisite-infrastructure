import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './components/mother/Homepage'
import MotherHome from './components/mother/MotherHome'
import AboutUs from './components/mother/AboutUs'
import ContactUs from './components/mother/ContactUs'
import ReadyToInvest from './components/mother/ReadyToInvest'
import Entertainment from './components/mother/Entertainment'
import OurCompanies from './components/mother/OurCompanies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<MotherHome/>}/>
          {/* <Route path='/' element={<Homepage/>}/> */}
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path="/ready-to-invest" element={<ReadyToInvest/>}/>
          <Route path="/enter" element={<Entertainment/>}/>
          <Route path="/companies" element={<OurCompanies/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
