import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';


//Affichages de la liste des forfaits/ section delete et edit pour admin 
const Forfait= ({forfait, onDelete, onEdit}) => {
    
    return (
        <div className="max-w-lg bg-white rounded-md shadow p-2 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden flex flex-col">
            <div className="px-2 py-4 border-b border-gray-300 flex items-center justify-between">
                <FaEdit className="text-green-800 pointer" onClick={() =>onEdit(forfait)}/>
                <FaTrash className="text-red-700 pointer" onClick={() =>onDelete(forfait.id)}/> 
            </div>
            <div className="px-2 py-2 flex-1">
                <h2 className="text-lg font-bold">{forfait.nomForfait}</h2>
                <p className="text-red-400 text-lg mt-2 mb-4"><strong>Prix: </strong>{forfait.prix} $</p>
            </div>
                <div className="w-full h-50 overflow-hidden px-2">
                    <img className="w-full h-full object-cover" src={forfait.image} alt="image" />
                </div>
            <div className="flex justify-center mb-3 px-2 pt-4">
                <Link to={`/forfait/${forfait.id}`} className="btn-pink">Réservez</Link>
            </div>
        </div>
    )
}
export default Forfait;