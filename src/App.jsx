import NavBar from "./components/NavBar";
import Header from "./components/Header";
import FormAdd from "./components/FormAdd";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import LesForfaits from "./components/LesForfaits";
import LeForfait from "./components/LeForfait";
import AddForfait from "./components/AddForfait";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";



function App() {
  const [forfaits, setForfaits] = useState([])

  // Afficher les forfaits
  useEffect(() => {
    const getForfaits = async () =>  {
      const forfaitsFromServer = await fetchForfaits('http://localhost:5000/forfaits')
      setForfaits(forfaitsFromServer)
    }
    getForfaits()
  }, [])

  // Récupération des données
  const fetchForfaits = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    
    return data
  }

  // Ajouter un forfait
  const addForfait = async (forfait) => {
    const res = await fetch('http://localhost:5000/forfaits', {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(forfait)
    })

    const newForfait = await res.json()
    setForfaits([...forfaits, newForfait])
  }

  //Modifier un forfait
  const EditForfait = async (id) => {

  }

  const updateForfait = async (id) => {

  }

  // Supprimer un forfait
  const deleteForfait = async (id) => {
    // console.log(id)
    await fetch(`http://localhost:5000/forfaits/${id}`, {
      method: 'DELETE'
    })

    setForfaits(forfaits.filter((forfait)=>forfait.id !== id))
  }

const[showFormAdd, setShowForfait] = useState(false)

  return (
    <BrowserRouter>
      <NavBar/>
      <Header/>
        <div className="font-sans min-h-screen mt-24">
          <div className="container mx-auto p-2 max-w-screen-lg ">
            <FormAdd toggleAddBtn={() => setShowForfait(!showFormAdd)} showForm={showFormAdd}/>
            { showFormAdd && <AddForfait onAdd={addForfait}/>}
            <Routes>
              <Route path="/" element={<Accueil /> }/>
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
