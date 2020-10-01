// React
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './Style.scss';

// Declaration
export default class Home extends React.Component {

    render() {

        return (
            <section className="home page">
                <header>
                    <h1 className="title">PLAY</h1>
                </header>
                <nav>
                    <ul className="navigation">
                        <li className="navigation-item">
                            <NavLink exact to="/easy" title="Start a new game" className="btn btn--large">NEW GAME</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        );

    }

}
