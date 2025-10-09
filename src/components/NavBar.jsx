import { Link } from 'react-router-dom'
import { useState } from 'react';

// import { useLocation } from 'react-router-dom';
const NavBar = ({logo = "SunVacay"}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="lg:px-16 px-4 bg-red-400 flex flex-wrap items-center py-4 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <Link className='logo text-3xl text-yellow-400' to="/">{logo}</Link>
            </div>
            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
            <svg className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
            </label>
            <input className="hidden"  onClick={() => setMenuOpen(!menuOpen)}aria-label="Menu" type="checkbox" id="menu-toggle"/>
            <div className={`${menuOpen ? "block" : "hidden"} md:flex md:items-center md:w-auto w-full`} id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-lg text-white pt-4 md:pt-0">
                        <li><Link className="md:p-4 py-3 px-0 block hover:underline" to="/">Accueil</Link></li>
                        <li><Link className="md:p-4 py-3 px-0 block hover:underline" to="/apropos">À Propos</Link></li>
                        <li><Link className="md:p-4 py-3 px-0 block hover:underline" to="/forfaits">Les Forfaits</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default NavBar;