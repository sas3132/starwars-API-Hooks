import Header from "./components/header/header";
import ListItems from "./components/listItems/listItems";
import RandomPlanet from "./components/randomPlanet/randomPlanet";
import People from "./components/people/people";
import {useState} from "react";


function App() {

    const [idPerson, setIdPerson] = useState(13)
const [buttonClass, setButtonClass] = useState('')


    const onPersonSelect = (id) => {
        setIdPerson(id)
        setButtonClass('bottomLi')

    }


    return (
        <div className="wrapper">
            <Header/>
            <RandomPlanet/>
            <ListItems idUsePerson={onPersonSelect} button={buttonClass} idP={idPerson} />
            <People personId={idPerson}  />

        </div>
    )
}

export default App;
