// import { Link } from 'react-router-dom';
import Forfait from './Forfait';

// Identifier chaque élément dans la liste par son id
const LesForfaits = ({forfaits, onDelete, onEdit }) => {
    return (
       <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-blue-100">
            {forfaits.map((forfait)=>(
                <Forfait key={forfait.id} forfait={forfait} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </div>
    )
}
export default LesForfaits;