import React from 'react';

const myStyle = {
  display: 'flex',
  flex: '1 0 20em',
  justifyContent: 'flex-start',
}

const myBackgroundColor = {
  backgroundColor: 'hsl(0, 0%, 95%)',
}

const myAnchorStyle = {
  fontSize: '1.2em',
  fontWeight: '500',
}

const myImgStyle = {
  minHeight: '215px',
  maxHeight: '215px',
  maxWidth: 'auto',
}

const myContentStyle = {
  minHeight: '120px',
  fontFamily: 'Georgia, serif',
}

const NewSingle = ({newsItem}) => (
  <div className="col s4" style={myStyle}>
      <div className="card" style={myBackgroundColor}>
        <div className="card-image">
          <img src={newsItem.urlToImage} alt={newsItem.title} style={myImgStyle}/>
          <div className="card-content" style={myContentStyle}>
            <p>{newsItem.title}</p>
          </div>
          <div className="card-action">
            <a href={newsItem.url} target="_blank" alt={newsItem.title} style={myAnchorStyle}>Full Article</a>
          </div>
        </div>
      </div>
    </div>
);

export default NewSingle;