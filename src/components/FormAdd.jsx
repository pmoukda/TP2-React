import { useLocation } from 'react-router-dom'
// import { FaTimes } from 'react-icons/fa'

const FormAdd = ({showForm, toggleAddBtn}) => {
const location = useLocation()
    return(
        <div className='flex justify-end mb-4'>
            {location.pathname === '/forfaits' &&(

            <button className="btn-small-blue" onClick={toggleAddBtn}>
                {showForm ? 'Fermer' : 'Ajouter un forfait'} 
            </button>
            )}
        </div>
    )
   


}
 export default FormAdd;