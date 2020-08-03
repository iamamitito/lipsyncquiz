import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="flex float-right mt-5">
                <li className="mr-6"><NavLink to='/'>Home</NavLink></li>
                <li className="mr-6"><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )

}

export default Nav;