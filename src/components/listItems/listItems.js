import './listItems.scss'
import {useEffect, useState} from "react";
import Spiner from "../spinner/spinner";
import ButtonNextPrev from "../buttonNextPrev/buttonNextPrev";
import People from "../people/people";


const ListItems = (props) => {

    const [name, setName] = useState([])
    const [nextPrev, setNextPrev] = useState(1)
    const pageNextPrev = props.pageNextPrev

    const clickNext = () => {
        if (nextPrev === pageNextPrev) {
            return setNextPrev(1)
        } else {
            setNextPrev(nextPrev + 1)
        }
    }

    const clickPrev = () => {
        if (nextPrev === 1) {
            return setNextPrev(pageNextPrev)
        } else {
            setNextPrev(nextPrev - 1)
        }

    }


    useEffect(() => {
        fetch(`https://swapi.dev/api/${props.fetchAll}/?page=${nextPrev}`)
            .then(res => res.json())
            .then(data => setName(data.results))

        return () => {
            setName([]);
        };

    }, [nextPrev, props.fetchAll])


    const usePosts = name.map((post) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const idPerson = post.url.match(idRegExp)[1]
        return <li onClick={() => props.idUsePerson(idPerson)} key={idPerson}
                   className={props.idP === idPerson ? props.button : ''}> {post.name}</li>
    })


    if (name.length === 0) {
        return (
            <div className='Spinner'>
                <Spiner/>
            </div>
        )
    }

    return (
        <>
            <main className="listItems">
                <ul>
                    {usePosts}
                </ul>
                <ButtonNextPrev clickPrev={clickPrev} clickNext={clickNext}/>
            </main>
            {/*<People personId={props.idP} />*/}
            {props.allItems}
        </>

    )
};

export default ListItems;

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