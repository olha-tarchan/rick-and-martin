import React, {useEffect, useState} from 'react';
import CharacterItem from "./item/CharacterItem";

const CharacterListComponent = () => {
    const [data, setData] = useState([]);
    const API_URL = 'https://rickandmortyapi.com/api/character';

    const fetchCharacters =  (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.results));
    }

    useEffect(() => {
        fetchCharacters(API_URL);
    }, []);

 //  console.log("API", data);

    return (
        <div className="characters">
            {data.map( el => <CharacterItem key={el.id} character={el} />) }
        </div>
    );
};

export default CharacterListComponent;