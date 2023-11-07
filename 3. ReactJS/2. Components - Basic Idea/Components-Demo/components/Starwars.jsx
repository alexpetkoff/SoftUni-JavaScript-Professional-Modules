import { useEffect, useState } from "react";

export default function Starwars(props) {

    const url = 'https://swapi.dev/api/people';

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCharacters(data.results))
            .catch((err) => console.error(err));
    }, []);

    let chars = characters.map((c) => <li key={c.name}>{c.name}</li>)

    return (
        <>
            <h1>StarWars characters: </h1>
            <ul>
                {chars}
            </ul>
        </>
    )
}