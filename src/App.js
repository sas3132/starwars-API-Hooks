import Header from "./components/header/header";
import ListItems from "./components/listItems/listItems";
import RandomPlanet from "./components/randomPlanet/randomPlanet";
import People from "./components/people/people";
import Starships from "./components/starships/starships";
import Planets from "./components/planets/planets";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <RandomPlanet/>
            <ListItems/>
            <People/>

        </div>
    )
}

export default App;
