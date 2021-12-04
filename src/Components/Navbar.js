import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/function-component-definition
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/about"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/service"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/posts/js"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/login"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
