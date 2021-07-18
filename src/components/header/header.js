import './header.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">

            <h1><a href="">StarsDB</a></h1>
            <h2><Link to="/characters">Characters</Link></h2>
            <h2><Link to="/planets">Planets</Link></h2>
            <h2><Link to="/starships">Starships</Link></h2>
        </header>

    )
};
export default Header;