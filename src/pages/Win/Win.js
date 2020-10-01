// React
import React from 'react';

// Styles
import './Style.scss';

// Declaration
export default function Win() {

    return (
        <section className="win page">
            <h2 className="subtitle">
                <em>And the winner is..</em>
            </h2>
            <h1 className="title">
                    YOU!
            </h1>
            <blockquote className="payoff">
                    And finally, you can proudly hire me
            </blockquote>
            <p>
                <span role="img" aria-label="Smile Emoji">😁</span>
                <span role="img" aria-label="Fox Emoji">🦊</span>
            </p>
        </section>
    );

}
