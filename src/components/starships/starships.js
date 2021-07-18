import './starships.scss'

import {useEffect, useState} from "react";

const Starships = ({personId}) => {

    const [persona, setName] = useState([])
    // const [id, setId] = useState(null)

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${personId}/`)
            .then(res => res.json())
            .then(data => setName(data))


        return () => {
            setName([]);// To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        };

    }, [personId])



    return (
        <main className="infoList">
            <img className="infoImg" src={`https://starwars-visualguide.com/assets/img/starships/${personId}.jpg`}
                 alt=""/>
            <ul>
                <li className="nameItem">Name: {persona.name}</li>
                <li>Model: {persona.model}</li>
                <li>Cost in credits: {persona.cost_in_credits}</li>
                <li>Length: {persona.length}</li>
                <li>Passengers: {persona.passengers}</li>
                <li>Hyperdrive rating: {persona.hyperdrive_rating}</li>
                <li>Consumables: {persona.consumables}</li>

            </ul>

        </main>
    );
};

export default Starships;