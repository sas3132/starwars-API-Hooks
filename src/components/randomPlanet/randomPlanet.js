import React, {useState} from "react";
import './randomPlanet.scss'
import '../../Service/swapiService'
import SwapiService from "../../Service/swapiService";
import Spiner from "../spinner/spinner";
import Error from "../error/error";

const RandomPlanet = () => {


    let swapiService = new SwapiService();
    let [error, setError] = useState(false)
    let [spinner, setSpinner] = useState(true)
    let [id, setId] = useState(Math.floor(Math.random() * 25) + 2)// непонятно пока, но работает
    let [name, setName] = useState(null)
    let [population, setPopulation] = useState(null)
    let [rotationPeriod, setRotationPeriod] = useState(null)
    let [diameter, setDiameter] = useState(null)

    let onError = () => {
        setError(true)
    }

    let updatePlanet = () => {
        // const id = Math.floor(Math.random() * 25) + 2
        swapiService.getPlanet(id)
            .then((planet) => {
                setSpinner(false)
                setId(id);
                setName(name = planet.name);
                setPopulation(population = planet.population);
                setRotationPeriod(rotationPeriod = planet.rotation_period);
                setDiameter(diameter = planet.diameter);
            })
            .catch(onError)
    }


    updatePlanet()


    if (spinner && error === false) {
        return (
            <div className="borderSpinner">
                <Spiner/>
            </div>
        )
    }

    if (error) {
        return (
            <Error/>
        )
    }
    return (
        <aside className="randomPlanet">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet"/>
            <ul>
                <li className="planetName">{name}</li>
                <li>Population: {population}</li>
                <li>Rotation period: {rotationPeriod}</li>
                <li>Diameter: {diameter}</li>
            </ul>
        </aside>
    );
};

export default RandomPlanet;

