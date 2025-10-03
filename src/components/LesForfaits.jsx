// import { Link } from 'react-router-dom';
import Forfait from './Forfait';


const LesForfaits = ({forfaits, ondelete, onEdit}) => {
    return (
       <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  bg-black">
            {forfaits.map((forfait)=>(
                <Forfait key={forfait.id} forfait={forfait} ondelete={ondelete} onEdit={onEdit}/>
            ))}
        </div>
    )
}
export default LesForfaits;