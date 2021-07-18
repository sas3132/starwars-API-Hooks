import './planets.scss'
import {useEffect, useState} from "react";

const Planets = ({personId}) => {

    const [persona, setName] = useState([])
    // const [id, setId] = useState(null)

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${personId}/`)
            .then(res => res.json())
            .then(data => setName(data))
        return () => {
            setName([]);
        };

    }, [personId])



    return (
        <main className="infoList">
            <img className="infoImg" src={`https://starwars-visualguide.com/assets/img/planets/${personId}.jpg`}
                 alt=""/>
            <ul>
                <li className="nameItem">Name: {persona.name}</li>
                <li>Rotation period: {persona.rotation_period}</li>
                <li>Orbital period: {persona.orbital_period}</li>
                <li>Diameter: {persona.diameter}</li>
                <li>Climate: {persona.climate}</li>
                <li>Population: {persona.population}</li>
                <li>Gravity: {persona.gravity}</li>

            </ul>

        </main>
    );
};

export default Planets;