import './starships.scss'

const Starships = () => {
    return (
        <main className="infoList">
            <img className="infoImg" src="img/starship.jpg" alt=""/>
            <ul>
                <li className="nameItem">Name</li>
                <li>Model: "CR90 corvette"</li>
                <li>Manufacturer: "Corellian Engineering Corporation"</li>
                <li>Cost-in-credits": "3500000"</li>
                <li>length": "150"</li>
                <li>Max-atmosphering_speed": "950"</li>
                <li>Crew: "30-165"</li>
                <li>Passengers: "600"</li>
                <li>Cargo_capacity: "3000000"</li>
                <li>Hyperdrive-rating: "2.0"</li>
            </ul>

        </main>
    );
};

export default Starships;