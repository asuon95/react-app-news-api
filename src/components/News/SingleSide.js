import React from 'react';

const SingleSide = ({newsItem}) => (
    <div>
        <div className="divider"></div>
        <a href={newsItem.url} target="_blank">
            <div className="section">
                <h5>{newsItem.source.name}</h5>
                <p>{newsItem.title}</p>
            </div>
        </a>
    </div>
);

export default SingleSide;