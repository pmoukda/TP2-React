import { Link } from 'react-router-dom';

const Accueil= () => {
    return (
        <div>
            <h1>Bienvenue</h1>
            <p></p>
            <Link to="/forfaits">Découvrir les forfaits</Link>
        </div>
    )
}
export default Accueil;