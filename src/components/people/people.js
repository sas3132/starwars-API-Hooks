import './people.scss'
import {useEffect, useState} from "react";
import Spiner from "../spinner/spinner";

const People = ({personId}) => {

    const [persona, setName] = useState([])
    // const [id, setId] = useState(null)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${personId}/`)
            .then(res => res.json())
            .then(data => setName(data))
        return () => {
            setName([]);
        };

    }, [personId])

    if (persona.length === 0) {
        return (
            <div className='Spinner'>
                <Spiner/>
            </div>
        )
    }

    return (
        <main className="infoListCharacters">
            <img className="infoImg" src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`}
                 alt=""/>
            <ul>
                <li className="nameItem">Name: {persona.name}</li>
                <li>Height: {persona.height}</li>
                <li>Mass: {persona.mass}</li>
                <li>Hair color: {persona.hair_color}</li>
                <li>Skin color: {persona.skin_color}</li>
                <li>Birth_year: {persona.birth_year}</li>
                <li>Gender: {persona.gender}</li>

            </ul>

        </main>
    );
};

export default People;