import React from 'react';

const About = () => {
    return (
        <div className="container mt-20 m-auto w-screen text-center p-4 leading-loose  text-gray-100">
            <div className="header tracking-wide">
                <i className="fas fa-info fa-3x text-pink-300"></i>
                <h1 className="text-3xl font-bold my-2">About this app</h1>
            </div>
            <div className="info font-light tracking-wider">
                <p>This app uses the <span className="italic"> No key no shade</span> API to fetch lipsync songs from Rupaul's Drag Race.</p>
                <p>There's a total of 10 random lipsyncs per play.</p>
                <p>You have to chose the queen who you think won the lipsync.</p>
                <p>Max score: 100 points.</p>
                <p>Version: 1.0.0</p>

            </div>

            <small className="text-pink-600 tracking-wide">&copy;iamamitito</small>
        </div>
    )
}
export default About;