import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
const Header = ({logo = "SunVacay"}) => {
       return (
        <header className="">
            <nav className='container mx-auto flex justify-between items-center px-4'>
                <Link to="/">{logo}</Link>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/apropos">À Propos</Link></li>
                    <li><Link to="/forfaits">Les Forfaits</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;