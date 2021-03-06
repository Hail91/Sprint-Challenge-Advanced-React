import React from 'react'

const PlayerCard = (props) => {
    return (
        <div className="player-container">
           {props.players.map(info => {
               return (
                <div className="card text-white bg-info mb-3" style={{width: '18rem'}}>
                <div className="card-header bg-primary" data-testid="name-text">Name: {info.name}</div>
                <div className="card-body">
               <h5 className="card-title">Country: {info.country}</h5>
                  <p className="card-text">Number of Searches: {info.searches}</p>
                </div>
              </div>
               )
           })} 
        </div>
    )
}

export default PlayerCard;

