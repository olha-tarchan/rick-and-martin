import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const CharacterInfoComponent = (props) => {
    const {id} = useParams();
    const [dataItem, setDataItem] = useState([]);
    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => {
                setDataItem(data);
                let episodeIdList = data.episode.map(e => e.replace('https://rickandmortyapi.com/api/episode/', '')).join(",");

                fetch(`https://rickandmortyapi.com/api/episode/[${episodeIdList}]`)
                    .then(res => res.json())
                    .then(data => setEpisodeList(data.map(e => e.name)));
            });
    }, [id]);

    return (
        <div className="characters flex-column pt-3">
            <div className="character-item">
                <div className="character-img">
                    <img src={dataItem.image} alt={dataItem.name}/>
                </div>
                <div className="character-info">
                    <div className="character-name none-link">{dataItem.name}</div>
                    {(dataItem.status) ?
                        <>
                            <div className="character-status" data-attr="alive">
                                {dataItem.status} - {dataItem.species}
                            </div>
                        </>
                        :
                        <>
                            <div className="character-status" data-attr="dead">
                                Dead - {dataItem.species}
                            </div>
                        </>
                    }
                    {dataItem.type &&
                    <>
                        <div className="character-info-label">Type:</div>
                        <div className="character-info-name">{dataItem.type}</div>
                    </>
                    }
                </div>
            </div>
            <div className="episode">
                <h2>Episodes:</h2>
                <div className="episode-box">
                    {episodeList.map((e, index) => <div key={index} className="episode-box-item">{e}</div>)}
                </div>
            </div>
        </div>

    );
};

export default CharacterInfoComponent;