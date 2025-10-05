import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';

const LeForfait = ({setShowForfait}) => {
    const { id } = useParams();
    const [leForfait, setForfait] = useState([])
    useEffect(() => {
        setShowForfait(false)
        const fetchForfait = async () => {
          try {
            const response = await fetch(`http://localhost:5000/forfaits/${id}`);
            const data = await response.json();
            setForfait(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchForfait();
      }, [setShowForfait, id]); 

    return(
      <div className="max-w-screen-md mx-auto p-4 bg-blue-100 mb-10">
        <div className="bg-white rounded-md shadow">
          {/* <img className="rounded-t" src="/img/hawaii.jpg" alt="Image" /> */}
          <div className="border-b border-gray-300 flex items-center justify-between p-4">
            <p className="text-red-400 text-lg mt-2 mb-4"> <strong>Catégorie-</strong> {leForfait.Catégorie}</p>
            <small>Id: {leForfait.id}</small>
          </div>
          <div className="flex-1 p-4">
              <h2 className="text-2xl font-bold">{leForfait['Nom du forfait']}</h2>
              <p className="text-gray-700 text-lg mt-4"> {leForfait.Description} </p>
          </div>
          <div className="flex justify-start p-4 ">
            <p className="text-xl text-red-400 mb-4"><strong>Prix: </strong> {leForfait.Prix} $</p>
          </div>
        </div>
        <div className="flex justify-end items-center text-pink-600 px-2 py-4 underline hover:text-pink-800 gap-3 mt-3">
          <FaArrowLeft/><Link to="/forfaits"> Retour aux forfaits</Link>
        </div>
    </div>     
  )
}
export default LeForfait;