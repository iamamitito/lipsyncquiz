import React, { useState } from 'react';
import Queen from './Queen/Queen';
import './Lipsync.css';

const Lipsync = () => {
    const [lipsync, setLipsync] = useState({});
    const [queens, setQueens] = useState([]);
    const [showLipsync, setShowLipsync] = useState(false);


    const getLipsync = async () => {
        const random = Math.floor(Math.random() * 171);
        const res = await fetch(`http://www.nokeynoshade.party/api/lipsyncs/${random}`);
        const data = await res.json();
        if (data.name) {
            setLipsync(data);
            setQueens(data.queens);
            setShowLipsync(true);
        }
    }
    return (
        <React.Fragment>
            <div onClick={getLipsync}>Get lipsync</div>
            <div className={showLipsync ? 'Lipsync show' : 'Lipsync hide'}>
                <div className="Lipsync-info">
                    <h2>{lipsync.name} by {lipsync.artist}</h2>
                    <div className="Lipsync-queens">
                        {queens.map(queen => {
                            return <Queen key={queen.id} queen={queen} />
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Lipsync;