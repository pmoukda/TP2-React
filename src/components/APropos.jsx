import { Link } from "react-router-dom";

const APropos = () => {
    return (
        <div className="mb-10">
            <div className="text-img">
                <img className="w-full h-full" src="./img/team/teams.jpg" alt="" />
                <div className="p-4">
                    <h2 className="text-2xl font-semibold py-2 italic">À propos de SunVacay</h2>
                    <p className="mt-2 mb-4">Chez SunVacay, nous croyons que chaque voyage est bien plus qu’un simple déplacement. C’est une expérience, une découverte, un souvenir qui reste gravé pour la vie.</p>
                    <p className="">Depuis notre création, notre mission est simple : <strong>offrir à chacun le voyage qui lui ressemble</strong>. Que vous rêviez de plages paradisiaques, d’aventures au cœur de la nature, de découvertes culturelles ou de séjours sur mesure, notre équipe est là pour vous accompagner à chaque étape.</p>
                </div>
            </div>
            <div className="mt-15">
                <h3>Pourquoi choisir SunVacay ?</h3>
                <div className=" max-w-screen-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <p className="border border-gray-300 rounded shadow p-4 bg-pink-100 italic"><strong className="flex border-b border-gray-400 mb-2">Expertise et passion : </strong>Une équipe de conseillers passionnés, spécialistes de nombreuses destinations.</p>
                    <p className="border border-gray-300 rounded shadow p-4 bg-pink-100 italic"><strong className="flex border-b border-gray-400 mb-2">Voyages sur mesure: </strong>Chaque itinéraire est pensé selon vos envies, votre rythme et votre budget.</p>
                    <p className="border border-gray-300 rounded shadow p-4 bg-pink-100 italic"><strong className="flex border-b border-gray-400 mb-2">Partenaires de confiance: </strong>Nous travaillons avec des prestataires locaux sélectionnés pour leur qualité et leur fiabilité.</p>
                    <p className="border border-gray-300 rounded shadow p-4 bg-pink-100 italic"><strong className="flex border-b border-gray-400 mb-2">Assistance dédiée: </strong>Avant, pendant et après le voyage, nous restons à vos côtés.</p>
                </div>
            </div>
            <div className=" text-img mt-15">
                <ul className="p-6 list-disc list-inside text-lg/8">
                    <h3>Nos offres de services</h3>
                    <li className="marker:text-yellow-600">Séjours personnalisés</li>
                    <li className="marker:text-yellow-600">Circuits organisés</li>
                    <li className="marker:text-yellow-600">Lune de miel et voyages de noces</li>
                    <li className="marker:text-yellow-600">Voyages d'affaires et incentives</li>
                    <li className="marker:text-yellow-600">Billetterie (vols, trains, ferries)</li>
                    <li className="marker:text-yellow-600">Assurance voyage</li>
                </ul>
                <img src="./img/objectif.jpg" alt="image objectif" className="md:aspect-4/3 sm:aspect-3/4 w-full h-full" />
            </div>
            <div className="mt-15 border-t border-gray-300">
                <h3>Notre équipe</h3>
                <ul className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-blue-100 rounded">
                    <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">Julien Mercier</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/julien-mercier.avif" alt="Julien Mercier" className="w-full h-full object-cover"/>
                        </div>
                    </li>
                    <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">Dan Atkins</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/dan-atkins.avif" alt="Photo" className="w-full h-full object-cover"/>
                        </div>
                    </li>
                    <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">David Manghal</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/david-menghal.avif" alt="David Manghal" className="w-full h-full object-cover object-right"/>
                        </div>
                    </li>
                    <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">Sophie Martin</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/sophie-martin.avif" alt="Sophie Martin" className="w-full h-full object-cover object-top"/>
                        </div>
                    </li>
                    <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">Laura Bernard</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/laura-bernard.avif" alt="Laura Bernard" className="w-full h-full object-cover"/>
                        </div>
                    </li>
                       <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">Charles Smith</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/charles-smith.avif" alt="Charles Smith" className="w-full h-full object-cover object-top"/>
                        </div>
                    </li>
                    <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">Aria Spinello</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/aria-spinello.avif" alt="Aria Spinello" className="w-full h-full object-cover"/>
                        </div>
                    </li>
                    <li className="flex flex-col items-center ">
                        <span className="text-gray-800 font-medium">Anna Clayton</span>
                        <div className="w-50 h-50 rounded-full overflow-hidden border border-gray-300">
                            <img src="/img/team/anna-clayton.avif" alt="Anna Clayton" className="w-full h-full object-cover "/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-15 bg-gray-100 text-center shadow-lg p-6">
                <h4 className="text-2xl font-bold py-6">Prêts à partir ?</h4>
                <div className="max-w-2xl mx-auto text-lg/7 italic mb-20">
                    <p><strong>Chez SunVacay</strong>, nous ne proposons pas de simples séjours: nous concevons des expériences sur mesure, à la hauteur de vos aspirations les plus personnelles.</p>
                    <p className="mt-4">N’hésitez pas à nous rendre visite ou à nous contacter pour discuter de votre prochain voyage. <strong>Votre aventure commence ici.</strong></p>
                </div>
                <div className="mt-8 mb-8">
                    <Link className="btn-pink btn-small p-4" to="#">Contactez-Nous</Link>
                </div>
            </div>
        </div>
    )
}
export default APropos;