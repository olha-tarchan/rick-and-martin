import React from 'react';
import {Link} from "react-router-dom";

const CharacterItem = (props) => {
    const item = props.character;

    return (
        <div className="character-item">
            <div className="character-img">
                <img src={item.image} alt={item.name}/>
            </div>
            <div className="character-info">
                <Link to={`/character/${item.id}`} className="character-name">{item.name}</Link>

                {item.status &&
                <>
                    {(item.status === "Alive") ?
                        <div className="character-status" data-attr="alive">
                            {item.status} - {item.species}
                        </div>
                        :
                        <div className="character-status" data-attr="dead">
                            {item.status} - {item.species}
                        </div>
                    }
                </>
                }
                {item.location &&
                <>
                    <div className="character-info-label">Last known location:</div>
                    <div className="character-info-name">{item.location.name}</div>
                </>
                }
                {item.origin &&
                <>
                    <div className="character-info-label">First seen in:</div>
                    <div className="character-info-name">{item.origin.name}</div>
                </>
                }
                {item.email &&
                <>
                    <div className="character-info-name">
                        Gender: {item.gender}
                    </div>
                    <div className="character-info-label">Email:</div>
                    <div className="character-info-name">{item.email}</div>
                </>
                }
            </div>
        </div>
    );
};

export default CharacterItem;