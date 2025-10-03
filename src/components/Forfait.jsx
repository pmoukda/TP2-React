import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const Forfait= ({forfait, onDelete, onEdit}) => {

    return (
        <div className="bg-yellow-400 rounded-md shadow p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            {/* <img className="rounded mb-4" src="" alt="Image" /> */}
            <d className="flex justify-end mb-2">
                <Link to={`/forfait/${forfait.id}`} className=" mr-3 text-gray-900"><FaEye/></Link>
            </d>
            <h2 className="text-lg font-bold">{forfait['Nom du forfait']}</h2>
            <p className="text-gray-900 text-sm mt-2"><strong>Prix: </strong>{forfait.Prix} $</p>
            <div className='flex justify-between mt-2'>
                <FaEdit className="text-green-600 pointer" onClick={() =>onEdit(forfait.id)}/>
                <FaTrash className="text-red-600 pointer" onClick={() =>onDelete(forfait.id)}/>
            </div>
        </div>
    )
}
export default Forfait;