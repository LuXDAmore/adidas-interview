// React
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
export default class BackToHomeButton extends React.Component {
    render() {

        return (
            <nav>
                <ul className="navigation">
                    <li className="navigation-item">
                        <NavLink exact to="/" title="Back to home" className="btn btn--background">BACK TO HOME</NavLink>
                    </li>
                </ul>
            </nav>
        );

    }
}
