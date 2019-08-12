import React from 'react';

const myStyle = {
  height: '500px'
}

const myImgStyle = {
  minHeight: '215px',
  maxHeight: '215px',
  maxWidth: 'auto'
}

const myContentStyle = {
  minHeight: '120px',
  fontFamily: 'monospace'
}

const NewSingle = ({newsItem}) => (
  <div className="col s4" style={myStyle}>
      <div className="card">
        <div className="card-image">
          <img src={newsItem.urlToImage} alt={newsItem.title} style={myImgStyle}/>
          <div className="card-content" style={myContentStyle}>
            <p>{newsItem.title}</p>
          </div>
          <div className="card-action">
            <a href={newsItem.url} target="_blank" alt={newsItem.title}>Full Article</a>
          </div>
        </div>
      </div>
    </div>
);

export default NewSingle;