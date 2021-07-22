import Header from "./components/header/header";
import ListItems from "./components/listItems/listItems";
import RandomPlanet from "./components/randomPlanet/randomPlanet";
import People from "./components/people/people";
import {useState} from "react";
import Planets from "./components/planets/planets";
import Starships from "./components/starships/starships";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {

    const [idPerson, setIdPerson] = useState(13)
    const [idStarships, setIdStarships] = useState(10)
    const [idPlanets, setIdPlanets] = useState(3)

    const [buttonClass, setButtonClass] = useState('')


    const onPersonSelect = (id) => {
        setIdPerson(id)
        setButtonClass('bottomLi')
    }
    const onStarshipsSelect = (id) => {
        setIdStarships(id)
        setButtonClass('bottomLi')
    }
    const onPlanetsSelect = (id) => {
        setIdPlanets(id)
        setButtonClass('bottomLi')
    }


    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <RandomPlanet/>

                <Route exact path={["/characters","/"]}  >
                    <ListItems idUsePerson={onPersonSelect} button={buttonClass} idP={idPerson}
                               pageNextPrev={9}
                               fetchAll={'people'}
                               allItems={<People personId={idPerson}/>}/>

                </Route>

                <Route path="/starships">
                    <ListItems idUsePerson={onStarshipsSelect} button={buttonClass} idP={idStarships}
                               pageNextPrev={4}
                               fetchAll={'starships'}
                               allItems={<Starships personId={idStarships}/>}/>
                </Route>
                <Route path="/planets">
                    <ListItems idUsePerson={onPlanetsSelect} button={buttonClass} idP={idPlanets}
                               pageNextPrev={6}
                               fetchAll={'planets'}
                               allItems={<Planets personId={idPlanets}/>}/>
                </Route>

            </div>
        </Router>
    )
}

export default App;
