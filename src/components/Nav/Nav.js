import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="flex mt-5 text-pink-300 text-2xl justify-between">
                <li><NavLink to='/lipsyncquiz'><i className="fas fa-crown mx-5 hover:text-pink-200"></i></NavLink></li>
                <li><NavLink to='/lipsyncquiz/about'><i className="fas fa-info mx-5 hover:text-pink-200"></i></NavLink></li>
            </ul>
        </nav>
    )

}

export default Nav;