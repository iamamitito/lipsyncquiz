import React from 'react';

const Lipsync = ({ lipsync, queens, handleAnswer, showAnswers, nextLipsync }) => {

    return (
        <div className="lipsync w-11/12 xl:w-2/4 m-auto">
            <div className="bg-white text-pink-600 p-5 flex flex-col rounded-md shadow-md text-center">
                <h2 className="text-2xl">{lipsync.name}</h2><small>by {lipsync.artist}</small>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
                {queens.map(queen => {
                    const textColor = showAnswers ? queen.won ? 'text-green-500' : 'text-red-500' : 'text-pink-600';
                    return (<button
                        onClick={() => handleAnswer(queen.won)}
                        className={`bg-white ${textColor} p-4 rounded-md focus:outline-none shadow`}
                        key={queen.id}>
                        {queen.name}</button>)
                })
                }
            </div>
            {showAnswers && (
                <button className="float-right bg-pink-500  mt-3 p-3 rounded-md focus:outline-none shadow" onClick={nextLipsync} >Next lipsync <i className="fas fa-chevron-right"></i></button>
            )}
        </div>
    );
}

export default Lipsync;