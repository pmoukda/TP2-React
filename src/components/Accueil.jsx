import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Forfait from './Forfait';

const Accueil= () => {
    const [forfaitsF, setForfaitsFilter] = useState([])

    // Faire afficher les 4 premiers forfaits
    useEffect(() => {
        fetch('http://localhost:5000/forfaits')
        .then(res => res.json())
        .then(data => {
        const filter = data.slice(0, 4);
        setForfaitsFilter(filter);
      });
    }, [])
    
    return (
        <div className=" lg:px-16 px-4">
            <div className='border border-gray-200 shadow-lg p-4 mb-10'>
                <h2>L'art du voyage, sur mesure</h2>
                <p className='mt-4'>Chez SunVacay, nous transformons <strong>vos rêves d’évasion en expériences inoubliables.</strong> Circuits organisés, séjours sur mesure ou escapades de dernière minute : notre équipe s’occupe de tout, pour que vous n’ayez qu’à profiter.</p>
                <ul className='flex flex-wrap gap-6 py-8'>
                    <li className='border border-gray-200 rounded p-2 bg-pink-100 text-pink-900'>Destinations d’exception</li>
                    <li className='border border-gray-200 rounded p-2 bg-pink-100 text-pink-900'>Expertise sur mesure </li>
                    <li className='border border-gray-200 rounded p-2 bg-pink-100 text-pink-900'>Accompagnement personnalisé</li>
                </ul>
                <div className="flex justify-end">
                    <Link className='btn-pink btn-small mt-5' to="/apropos">En savoir plus</Link>
                </div>
            </div>
            <div className='mt-15'>
                <h2>Nos Destinations populaires</h2>
                <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-blue-100">
                {forfaitsF.map(forfait => (
                    <Forfait key={forfait.id} forfait={forfait}/>
                ))}
            </div>
            </div>
            <div className="flex justify-end">
                <Link className='btn-pink btn-small mt-5' to="/forfaits">Voir plus</Link>
            </div>
            <div className='mt-15 mb-6'>
                <h2>Galerie</h2>
                <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <img className='w-full h-full aspect-4/3' src="./img/Dubai.avif" alt="dubai" />
                    <img className='w-full h-full aspect-4/3' src="./img/egypt.webp" alt="egypt" />
                    <img className='w-full h-full aspect-4/3' src="./img/Monaco.jpg" alt="monaco" />
                    <img className='w-full h-full aspect-4/3' src="./img/Croisiere-Yangtse.jpg" alt="yantse" />
                    <img className='w-full h-full aspect-4/3' src="./img/suisse.jpg" alt="suisse" />
                    <img className='w-full h-full aspect-4/3' src="./img/tahiti-et-iles.jpg" alt="tahiti" />
                </div>
            </div>
        </div>
    )
}
export default Accueil;
