import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import './randomPlanet.scss'
import '../../Service/swapiService'
import SwapiService from "../../Service/swapiService";
import Spiner from "../spinner/spinner";
import Error from "../error/error";


const RandomPlanet = () => {


    let swapiService = new SwapiService();
    const [error, setError] = useState(false)
    const [spinner, setSpinner] = useState(true)
    const [id, setId] = useState(1)// непонятно пока, но работает
    const [name, setName] = useState(null)
    const [population, setPopulation] = useState(null)
    const [rotationPeriod, setRotationPeriod] = useState(null)
    const [diameter, setDiameter] = useState(null)

    // let onError = () => {
    //     setError(true)
    // }


    // let updatePlanet = () => {
    //     // const id = Math.floor(Math.random() * 25) + 2
    //     swapiService.getPlanet(id)
    //         .then((planet) => {
    //             setSpinner(false)
    //             setName(name = planet.name);
    //             setPopulation(planet.population);
    //             setRotationPeriod(rotationPeriod = planet.rotation_period);
    //             setDiameter(diameter = planet.diameter);
    //         })
    //         .catch(onError)
    // }
    // setInterval(updatePlanet,1500)

useEffect(()=>{
      const firstCall = () =>  {
        let magicNumber = Math.floor(Math.random() * 25) + 2;

        fetch(`https://swapi.dev/api/planets/${magicNumber}/`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error();
                }
            })
            .then(data => {setName(data.name);
                setSpinner(false);
                setId(magicNumber);
                setPopulation(data.population);
                setRotationPeriod(data.rotation_period);
                setDiameter(data.diameter)
            })
            .catch(() => {
                setError(true);

            });

    }
 firstCall()
},[])

    // const doShit = useCallback(() => fetch(`…/magic`).then(shit => setShit(shit)), [magic]); совет пикачу


    useEffect(() => {

          const intervalId =   setInterval(  () =>  {
              let magicNumber = Math.floor(Math.random() * 25) + 2;

              fetch(`https://swapi.dev/api/planets/${magicNumber}/`)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error();
                    }
                })
                .then(data => {setName(data.name);
                    setSpinner(false);
                    setId(magicNumber);
                    setPopulation(data.population);
                    setRotationPeriod(data.rotation_period);
                    setDiameter(data.diameter)
                })
               .catch(() => {
                  setError(true);
                  clearInterval(intervalId)
               });

        },20000)
return () => clearInterval(intervalId)

    },[id])


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
    function  handleImageError (ev) {
        ev.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    }
//https://starwars-visualguide.com/assets/img/films/2.jpg
    return (
        <aside className="randomPlanet">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" onError={handleImageError}/>
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

