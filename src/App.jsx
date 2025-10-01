import Header from "./components/Header";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import LesForfaits from "./components/LesForfaits";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import {useState} from "react";


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <main className="mt-24">
        <div className="font-sans min-h-screen">
          <div className="container mx-auto p-8 border-2 border-blue-200 max-w-screen-md rounded-lg">
            <Routes>
              <Route path="/" element={<Accueil />}/>
              <Route path="/apropos" element={<APropos />}/>
              <Route path="/forfaits" element={<LesForfaits />}/>
            </Routes>
          </div>
        </div>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
