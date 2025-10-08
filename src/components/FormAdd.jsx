import { useLocation } from 'react-router-dom'

const FormAdd = ({showForm, toggleAddBtn}) => {
const location = useLocation()
    return(
        <div className='flex justify-end mb-4'>
            {location.pathname === '/forfaits' &&(

                <button className={showForm ? "btn-small-red" :"btn-small-blue"} onClick={toggleAddBtn}>
                    {showForm ? 'Fermer' : 'Ajouter un forfait'} 
                </button>
            )}
        </div>
    )
}
 export default FormAdd;