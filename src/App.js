import Header from "./components/header/header";
import ListItems from "./components/listItems/listItems";
import RandomPlanet from "./components/randomPlanet/randomPlanet";
import People from "./components/people/people";
import {useState} from "react";


function App() {

    const [idPerson, setIdPerson] = useState(1)

    const onPersonSelect = (id) => {
        setIdPerson(id)
    }


    return (
        <div className="wrapper">
            <Header/>
            <RandomPlanet/>
            <ListItems idUsePerson={onPersonSelect}/>
            <People personId={idPerson}/>

        </div>
    )
}

export default App;
