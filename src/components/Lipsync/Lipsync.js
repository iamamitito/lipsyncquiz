import React from 'react';

const Lipsync = ({ lipsync, queens, handleAnswer, showAnswers, nextLipsync }) => {

    return (
        <div className="lipsync w-11/12 lg:w-1/2 m-auto">
            <div className="bg-white text-pink-600 p-5 flex flex-col rounded-md shadow-md text-center">
                <h2 className="text-2xl">{lipsync.id === 129 ? "I'm Coming Out" : lipsync.name}</h2><small>by {lipsync.artist}</small>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
                {queens.map(queen => {
                    const textColor = showAnswers ? queen.won ? 'text-green-500' : 'text-red-500' : 'text-pink-600';
                    const icon = showAnswers ? queen.won ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i> : null;
                    return (<button
                        onClick={() => handleAnswer(queen.won)}
                        className={`bg-white p-4 ${textColor} rounded-md focus:outline-none shadow-md`}
                        key={queen.id}>
                        {icon} {lipsync.id === 143 && queen.won ? 'Monet X Change' : queen.name}</button>)
                })
                }
            </div>
            {showAnswers && (
                <button className="float-right bg-pink-500  mt-4 p-3 rounded-md focus:outline-none shadow" onClick={nextLipsync} >Next <i className="fas fa-chevron-right"></i></button>
            )}
        </div>
    );
}

export default Lipsync;