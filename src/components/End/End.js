import React from 'react';

const End = ({ score }) => {
    return (
        <div className=" flex flex-col text-2xl font-semibold w-1/2 md:w-2/12 m-auto">
            <h1>Score: </h1>
            <span className="text-pink-600 text-4xl ">{score}</span>
            <span className="text-lg w-full font-light">{score > 80 ? "You're a winner, baby!" : "Learn your herstory, sis!"}</span>
            <a href="/lipsyncquiz" className="bg-pink-500 my-3 py-2 px-4 shadow hover:bg-pink-600 rounded"><i className="fas fa-redo"></i></a>
        </div>)
}
export default End;