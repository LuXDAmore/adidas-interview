// React
import React from 'react';
import PropTypes from 'prop-types';

// Third parties
import Swal from 'sweetalert2';

// Style
import './Style.scss';

// Components
const Box = React.lazy(
    () => import(
        '../../components/Box/Box'
    )
);

// Declaration
export default class Play extends React.Component {

    state = {
        played: this.props.played,
        winnerBox: React.createRef(),
    };

    handleCheating = () => {

        this.state.winnerBox && this.state.winnerBox.current && this.state.winnerBox.current.handleClick();

    };

    handleResults = async isWinner => {

        const {
            history,
            location: { pathname },
        } = this.props;

        let url = pathname;

        // TODO: This should be done better, it re-render the grid after clicking on a Box.
        ! this.props.played && this.setState(
            {
                played: true,
            }
        );

        const message = isWinner
            ? {
                title: 'Yeah 🎉',
                text: 'Fly to the next level!',
                icon: 'success',
            }
            : {
                title: 'Ops.. 😟',
                text: 'You clicked the wrong box',
                icon: 'error',
            }
        ;

        await Swal.fire(
            {
                ... message,
                timer: 6300,
                timerProgressBar: true,
                showCancelButton: false,
                showConfirmButton: false,
            }
        );

        if( isWinner ) {

            switch( pathname ) {
                case '/hard':
                    url = `/you-win/${ this.props.level }`;
                    break;
                case '/medium':
                    url = '/hard';
                    break;
                case '/easy':
                default:
                    url = '/medium';
            }

        } else
            url = `/game-over/${ this.props.level }`;

        history.push(
            url
        );

    };

    componentDidUpdate( { played } ) {

        if( played !== this.props.played ) {

            this.setState(
                {
                    played: this.props.played,
                }
            );

        }

    }

    render() {

        // Boxes
        const boxes = []
            // Data
            , {
                level,
                columns,
                rows,
                hue,
                luminosity,
                saturation,
            } = this.props
            , numberOfBoxes = columns * rows
            , thebox = Math.floor(
                Math.random() * Math.floor(
                    columns * rows
                )
            )
            // Colors
            , luxRangeMin = Math.random()
            , luxRangeMax = Math.random()
            , luxMax = luminosity * luxRangeMin * 0.6
            , luxMin = 1 - ( luminosity * luxRangeMax ) * 0.6
        ;

        for( let index = 0; index < numberOfBoxes; index ++ ) {

            const isWinner = index === thebox
                , lux = (
                    isWinner
                        ? luxMin
                        : luxMax
                )
                , backgroundColor = `hsl( ${ hue }deg ${ ( lux * 100 ) }% ${ ( saturation * 100 ) }% )`
            ;

            boxes.push(
                (
                    <li key={ `${ level }-${ index }` }>
                        <React.Suspense fallback={<div className="loading spinner spinner--small" />}>
                            <Box
                                isWinner={ isWinner }
                                onResult={ this.handleResults }
                                backgroundColor={ backgroundColor }
                                reveal={ this.state.played }
                                ref={ isWinner ? this.state.winnerBox : null }
                            />
                        </React.Suspense>
                    </li>
                )
            );

        }

        const footer = this.props.played
            ? null
            : (
                <footer className="cheating">
                    <span className="arrow">&raquo;</span>
                    <button
                        type="button"
                        className="btn btn--medium btn btn--border text--white bg--primary"
                        onClick={ this.handleCheating }
                    >
                        <strong>
                            CHEAT
                            <span role="img" aria-label="Angry Emoji">😤</span>
                        </strong>
                    </button>
                    <span className="arrow">&laquo;</span>
                </footer>
            )
        ;

        return (
            <section className="page play">
                <header>
                    <h3>
                        [ Spot the tile ]
                        <sup className="counter">
                            <small>level { level }</small>
                        </sup>
                    </h3>
                </header>
                <ul
                    className="board"
                    style={
                        {
                            gridTemplateColumns: `repeat( ${ columns }, 1fr )`,
                            gridTemplateRows: `repeat( ${ rows }, 1fr )`,
                        }
                    }
                >
                    { boxes }
                </ul>
                { footer }
            </section>
        );

    }

}

// Validations
Play.propTypes = {
    // Grid game
    level: PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.number,
        ]
    ),
    columns: PropTypes.string,
    rows: PropTypes.string,
    played: PropTypes.bool,
    // Colors
    hue: PropTypes.number.isRequired,
    luminosity: PropTypes.number.isRequired,
    saturation: PropTypes.number.isRequired,
    // Router
    history: PropTypes.shape(
        {
            push: PropTypes.func.isRequired,
        }
    ),
    location: PropTypes.shape(
        {
            pathname: PropTypes.string.isRequired,
        }
    ),
};
