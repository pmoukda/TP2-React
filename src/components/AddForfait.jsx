import { useState } from 'react';

//formulaire pour ajout des forfaits
const AddForfait = ({onAdd}) => {
    const[nomForfait, setNomForfait] = useState('');
    const[description, setDescription] = useState('');
    const[prix, setPrix] = useState('');
    const[categorie, setCategorie] = useState('');
    const[image, setImage] = useState('');

    // Empêcher le rechargement de la page
    const onSubmit =(e) =>{
        e.preventDefault();
        if(!nomForfait || !description || !prix || !categorie || !image){
            alert('Veuillez remplir tous les champs.')
            return;
        }
        // Convertir le prix en nombre
        const prixNumber = Number(prix); 

        if (isNaN(prixNumber) || prixNumber <= 0) {
        alert('Veuillez entrer un prix valide.');
        return;
  }     
        // Ajouter les props de l'objet et vider les champs après soumission
        onAdd({nomForfait, description, prix:prixNumber, categorie, image})
        setNomForfait('')
        setDescription('')
        setPrix('')
        setCategorie('')
        setImage('')
        // console.log(nomForfait, prix, categorie, description, image);
    }

    return(
    
        <div className="bg-blue-100 p-6 mb-8">
            <form className="space-y-6" onSubmit={onSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Ajouter un forfait</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label htmlFor="nomForfait">Nom du forfait</label>
                        <input className="input-group"
                        type="text"
                        id='nomForfait'
                        name='NomForfait'
                        placeholder="Nom du forfait"
                        value={nomForfait}
                        onChange={(e) =>setNomForfait(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="prix">Prix</label>
                        <input className="input-group"
                        type="number"
                        id='prix'
                        name='prix'
                        min={0}
                        step={0.01}
                        placeholder="Entrez un prix"
                        value={prix}
                        onChange={(e) =>setPrix(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="categorie">Catégorie</label>
                        <input className="input-group"
                        type="text"
                        id='categorie'
                        name='categorie'
                        placeholder="Entrez une catégorie"
                        value={categorie}
                        onChange={(e) =>setCategorie(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="image">Image</label>
                        <input className="input-group"
                        type="url"
                        id='image'
                        name='image'
                        placeholder="Entrez un URL"
                        value={image}
                        onChange={(e) =>setImage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea className="input-group h-50"
                    id='description'
                    name='description'
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>setDescription(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" className="btn-blue mt-6 mb-6" value= 'Ajouter'/>
            </form>
        </div>
    )   
}
export default AddForfait;