import './listItems.scss'
import {useEffect, useState} from "react";
import Spiner from "../spinner/spinner";


const ListItems = (props) => {

    const [name, setName] = useState([])
    // const [id, setId] = useState(null)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
            .then(res => res.json())
            .then(data => setName(data.results))

    }, [])


//     const _extractId = (item) => {
//         const idRegExp = /\/([0-9]*)\/$/;
//         return item.url.match(idRegExp)[1];
//     };
//
//     const _transformPerson = (person) => {
//         return {
//             id: this._extractId(person),
//             name: person.name,
//             gender: person.gender,
//             birthYear: person.birth_year,
//             eyeColor: person.eye_color
//         }
//     }
// }



//     const idUsePerson = name.map((post) => {
//     const idRegExp = /\/([0-9]*)\/$/;
//     return console.log(post.url.match(idRegExp)[1])
// })

    const usePosts = name.map((post) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const idPerson = post.url.match(idRegExp)[1]
        return <li onClick={()=>props.idUsePerson(idPerson)} key={idPerson} className={`bottomLi`}>{post.name}</li>
    })

    if (name.length === 0) {
        return (
            <div className='Spinner'>
                <Spiner/>
            </div>
        )
    }

    return (
        <main className="listItems">
            <ul>
                {usePosts}
            </ul>
        </main>
    )
};

export default ListItems;

