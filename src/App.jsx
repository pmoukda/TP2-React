import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import LesForfaits from "./components/LesForfaits";
import LeForfait from "./components/LeForfait";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";



function App() {
  const [forfaits, setForfaits] = useState([])

  useEffect(() => {
    const getForfaits = async () =>  {
      const forfaitsFromServer = await fetchForfaits('http://localhost:5000/forfaits')
      setForfaits(forfaitsFromServer)
    }
    getForfaits()
  }, [])

  const fetchForfaits = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    
    return data
  }

  const AddForfait = () => {
    
  }

  const EditForfait = async (id) => {

  }

  const updateForfait = async (id) => {

  }


  
  const deleteForfait = async (id) => {
  
  }

const[showForfait, setShowForfait] = useState(false)

  return (
    <BrowserRouter>
      <NavBar/>
      <Header/>
        <div className="font-sans min-h-screen mt-24">
          <div className="container mx-auto p-2 max-w-screen-lg ">
            <Routes>
              <Route path="/" element={<Accueil />}/>
              <Route path="/apropos" element={<APropos />}/>
              <Route path="/forfaits" element={<LesForfaits forfaits={forfaits} onDelete={deleteForfait} />}/>
              <Route path="/forfait/:id" element={<LeForfait setShowForfait={setShowForfait} />}/>
            </Routes>
          </div>
        </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
