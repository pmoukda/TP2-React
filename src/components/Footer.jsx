import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = ({logo= 'SunVacay'}) => {
    return (
        <div className="mt-15 bg-black text-white px-4 py-6">
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                <Link className='logo text-3xl text-yellow-400 mt-2' to="/">{logo}</Link>
                <div className="italic mt-2">
                    <p className="underline text-lg"><strong>Horaires: </strong></p>
                    <p><strong>Lundi au Jeudi: </strong>8h30 - 20h</p>
                    <p><strong>Vendredi: </strong>8h30 - 16h00</p>
                    <p><strong>Samedi et Dimanche: </strong>9h - 17h</p>
                </div>
                <div className="italic mt-2">
                    <p className="underline text-lg"><strong>Coordonées: </strong></p>
                    <p><strong>Adresse: </strong>264, Boul. René-Levesque O, Montréal, Qc H2Z 7Y4</p>
                    <p><strong>Téléphone: </strong> (514) 648-8934</p>
                    <p className="cursor-pointer underline text-pink-400"><strong>Email: </strong>Sunvacay@info.com</p>
                </div>
            </div>
                <div className="max-w-screen-md mx-auto flex md:justify-end sm:justify-start gap-4 text-xl p-4"> 
                    <Link className="cursor-pointer" to="#"><FaFacebook/></Link>
                    <Link className="cursor-pointer" to="#"><FaInstagram/></Link>
                    <Link className="cursor-pointer" to="#"><FaTiktok/></Link>
                </div>
            <div className="text-center p-3 border-t border-gray-800">
                <p>React &copy; SunVacay.2025 -Tous droits réservés.</p>
            </div>
        </div>
    )
}
export default Footer;