import React from 'react';

const About = () => {
    return (
        <div className="container mt-20 m-auto w-screen text-center p-4 leading-loose">
            <i className="fas fa-crown fa-2x text-pink-600"></i>
            <h1 className="text-3xl text-pink-600 font-bold my-2">About this app</h1>
            <p>This app uses the <span className="italic"> No key no shade</span> API to fetch lipsync songs from Rupaul's Drag Race.</p>
            <p>There's a total of 15 random lipsyncs each time you play it.</p>
            <p>You have to chose the queen who you think won the lipsync.</p>
            <p>Max score: 15 points.</p>
            <p>Version: 1.0.0</p>
            <small>&copy;iamamitito</small>
        </div>
    )
}
export default About;