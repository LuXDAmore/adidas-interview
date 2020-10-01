// React
import React from 'react';

// Styles
import './Style.scss';

// Declaration
export default class GameOver extends React.Component {

    render() {

        return (
            <div className="game-over page">

                <h1 className="title">
                    YOU LOOSE
                </h1>

                <img
                    src={ `${ process.env.PUBLIC_URL }/imgs/you-loose.webp` }
                    className="image"
                    alt="Looser"
                />

                <blockquote className="payoff">
                    <em>
                        Without losers,<br />
                        where would the winners be?
                    </em>
                </blockquote>

            </div>
        );

    }

}
