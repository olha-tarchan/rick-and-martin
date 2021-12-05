import React from 'react';
import {Link} from "react-router-dom";
import 'item-styles.css';

const CharacterItem= (props) => {
   console.log("propsItem", props.character);
   const item = props.character;
    return (
        <div className="character-item">
            <div className="character-img">
                <img src={item.image} alt={item.name}/>
            </div>
            <div className="character-info">
                <Link to={`/character/${item.id}`} className="character-name">{item.name}</Link>
                <div className="character-status" data-attr={item.status === "unknown" ? 'dead' : 'alive'}>
                    {item.status} - {item.species}
                </div>
                <div className="character-info-label">Last known location:</div>
                <div className="character-info-name">{item.location.name}</div>
                <div className="character-info-label">First seen in:</div>
                <div className="character-info-name">{item.origin.name}</div>
            </div>
        </div>
    );
};

export default CharacterItem;