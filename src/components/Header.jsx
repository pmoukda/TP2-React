import { Link } from 'react-router-dom'

const Header = ({$title="Partez à l'aventure avec SunVacay votre agence de voyage par excellence!"}) => {
    return (
        <div className='relative'>
            <img className="w-full h-125 object-cover object-center mb-4" src="/img/ile-grecque.jpg" alt="Image" />
            <div className="flex flex-col justify-center items-center absolute inset-0 bg-black/40">
                <h1 className='text-4xl font-bold text-white'>{$title}</h1>
                <Link className='btn-yellow' to="/forfaits">Découvrir nos forfaits</Link>
            </div>
        </div>
    );
 }
export default Header;