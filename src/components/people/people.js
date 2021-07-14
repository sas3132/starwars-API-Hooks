import './people.scss'
import {useEffect, useState} from "react";

const People = (props) => {

    const [persona, setName] = useState([])
    // const [id, setId] = useState(null)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${props.personId}/`)
            .then(res => res.json())
            .then(data => setName(data))

    }, [props.personId])



    return (
        <main className="infoList">
            <img className="infoImg" src={`https://starwars-visualguide.com/assets/img/characters/${props.personId}.jpg`} alt=""/>
            <ul>
                <li className="nameItem">Name: {persona.name}</li>
                <li>Height: {persona.height}</li>
                <li>Mass: {persona.mass}</li>
                <li>Hair color: {persona.hair_color}</li>
                <li>Skin color: {persona.skin_color}</li>
                <li>Eye color: {persona.eye_color}</li>
                <li>Birth_year: {persona.birth_year}</li>
                <li>Gender: {persona.gender}</li>


            </ul>

        </main>
    );
};

export default People;