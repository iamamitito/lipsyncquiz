import React from 'react';
import './Queen.css';

const Queen = ({ queen }) => {
    return <div className="Queen">
        <h3>{queen.name}</h3>
        <p>{queen.won ? 'winner' : 'loser'}</p>
    </div>
}
export default Queen;