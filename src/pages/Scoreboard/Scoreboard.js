// React
import React from 'react';

// Styles
import './Style.scss';

// Declaration
export default class Scoreboard extends React.Component {

    render() {

        // Get score data
        const scoreboardData = JSON.parse(
                localStorage.getItem(
                    'hall-of-fame'
                )
            ) || {}
            // Sort and limit
            , limit = 10
            , sortable = []
        ;

        // Limit to 10
        let i = 1;

        // To Array
        for( const username of Object.keys( scoreboardData || [] ) ) {

            i <= limit && sortable.push(
                {
                    index: i,
                    username,
                    points: scoreboardData[ username ],
                }
            );

            i ++;

        }

        // Sort
        const scorelist = sortable.sort(
            (
                { points: pointsA },
                { points: pointsB },
            ) => pointsB - pointsA
        ).map(
            (
                {
                    username,
                    points,
                    index,
                },
            ) => (
                <li key={ index }>
                    <strong className="username">{ username }</strong><small className="points">({ points })</small>
                </li>
            )
        );

        return (
            <section className="scoreboard page">
                <h1 className="title">
                    Scoreboard
                </h1>
                <ul className="board">{ scorelist }</ul>
            </section>
        );

    }

}
