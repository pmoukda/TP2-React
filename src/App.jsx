import NavBar from "./components/NavBar";
import Header from "./components/Header";
import FormAdd from "./components/FormAdd";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import LesForfaits from "./components/LesForfaits";
import LeForfait from "./components/LeForfait";
import AddForfait from "./components/AddForfait";
import EditForfait from "./components/EditForfait";
import MessageSucces from "./components/MessageSucces";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";



function App() {
  const [forfaits, setForfaits] = useState([])

  const [showFormAdd,  setShowForfait] = useState(false)
  const [showFormEdit, setShowForfaitEdit] = useState(false)
  const [forfaitEnEdition, setForfaitEnEdition] = useState(null);
  const [messageSuccess, setMessageSuccess] = useState('');

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
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(forfait)
    })

    const newForfait = await res.json()
    setForfaits([...forfaits, newForfait])
    setMessageSuccess('Le forfait a été ajouter avec succès !');

  }

  const editForfait = async (updatedForfait) => {
    // console.log(updatedForfait);
  try {
    const res = await fetch(`http://localhost:5000/forfaits/${updatedForfait.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedForfait),
    });

    if (!res.ok) {
      throw new Error('Échec de la mise à jour du forfait.');
    }

    const forfaitModifie = await res.json();

    // Mettre à jour le forfait dans la liste actuelle
    setForfaits(forfaits.map((forfait) => forfait.id === forfaitModifie.id ? forfaitModifie : forfait));
  
    setMessageSuccess('Le forfait a été modifié avec succès !');
    setShowForfaitEdit(false); // cache le formulaire après édition réussie
  } catch (error) {
    console.error(error.message);
    alert("Erreur lors de la mise à jour du forfait.");
  }
};

  // Supprimer un forfait
  const deleteForfait = async (id) => {
    // console.log(id)
    await fetch(`http://localhost:5000/forfaits/${id}`, {
      method: 'DELETE'
    })

    setForfaits(forfaits.filter((forfait)=>forfait.id !== id))

    setMessageSuccess('Le forfait a été supprimer avec succès !');
  }

// Fonction appelée quand on clique sur "Edit"
  const editClick = (forfait) => {
    setForfaitEnEdition(forfait);      
    setShowForfaitEdit(true); 
    setMessageSuccess('');
   
};
  return (
    <BrowserRouter>
      <NavBar/>
      <Header/>
      <div className="font-sans min-h-screen mt-24">
        <div className="container mx-auto p-2 max-w-screen-lg ">
          <MessageSucces message={messageSuccess} onClose={() => setMessageSuccess('')}/>
          <FormAdd toggleAddBtn={() => setShowForfait(!showFormAdd)} showForm={showFormAdd} />
          { showFormAdd && <AddForfait onAdd={addForfait}/>}
          { showFormEdit && forfaitEnEdition && <EditForfait initForfait={forfaitEnEdition} onEdit={editForfait} onCancel={() => {setShowForfaitEdit(false); setForfaitEnEdition(null)}}/>}
          <Routes>
            <Route path="/" element={<Accueil forfaits={forfaits} /> }/>
            <Route path="/apropos" element={<APropos />}/>
            <Route path="/forfaits" element={<LesForfaits forfaits={forfaits} onDelete={deleteForfait} onEdit={editClick} />}/>
            <Route path="/forfait/:id" element={<LeForfait setShowForfait={setShowForfait} />}/>
          </Routes>
        </div>
      </div>
    <Footer/>
  </BrowserRouter>
  )
}

export default App;
