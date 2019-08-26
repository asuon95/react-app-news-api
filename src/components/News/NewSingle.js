import React from 'react';
import './News.css';

const NewSingle = ({newsItem}) => (
  <div className="col s4 cardContainer">
      <div className="card cardBody">
        <div className="card-image">
          <img className="cardImage" src={newsItem.urlToImage} alt={newsItem.title}/>
          <div className="card-content myCardContent">
            <p className="cardContentTitle">{newsItem.title}</p>
          </div>
          <div className="card-action">
            <a className= "cardAnchor" href={newsItem.url} target="_blank" rel="noopener noreferrer" alt={newsItem.title}>Full Article</a>
          </div>
        </div>
      </div>
    </div>
);

export default NewSingle;