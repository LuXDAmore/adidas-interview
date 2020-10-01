// React
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';

// Third parties
import { CirclePicker } from 'react-color';
import Colors from 'color-convert';

// Styles
import './Style.scss';

// Pages
import Home from '../../pages/Home/Home';

// Lazy
const GameOver = React.lazy(
        () => import(
            '../../pages/GameOver/GameOver'
        )
    )
    , FourZeroFour = React.lazy(
        () => import(
            '../../pages/FourZeroFour/FourZeroFour'
        )
    )
    , Win = React.lazy(
        () => import(
            '../../pages/Win/Win'
        )
    )
    , Play = React.lazy(
        () => import(
            '../../pages/Play/Play'
        )
    )
    // Components
    , BackToHomeButton = React.lazy(
        () => import(
            '../BackToHomeButton/BackToHomeButton'
        )
    )
;

// App
export default class App extends React.Component {

    state = {
        availableColors: [
            '#f39c12',
            '#2980b9',
            '#10ac84',
            '#bdc3c7',
            '#34495e',
        ],
        hue: 165,
        luminosity: 0.8,
        saturation: 0.36,
        backgroundColor: '#10ac84',
    };

    componentDidMount() {

        window.console.info(
            '%c Luca Iaconelli ',
            'color: #fff; background-color: #333; padding: 4px 2px;',
            '🤘 Ready to rock'
        );

    }

    handleShowSolution = () => {

        this.setState(
            {
                played: ! this.state.played,
            }
        );

    }

    handleChangeComplete = (
        {
            rgb: {
                r,
                g,
                b,
            },
            hsl,
        }
    ) => {

        this.setState(
            {
                hue: hsl.h,
                luminosity: hsl.l,
                saturation: hsl.s,
                backgroundColor: `rgb(${ r }, ${ g }, ${ b })`,
            }
        );

    };

    handleRandomColor = () => {

        const hsl = {
                h: Math.floor(
                    Math.random() * Math.floor(
                        361
                    )
                ),
                l: Math.random(),
                s: Math.random(),
            }
            , [
                r,
                g,
                b,
            ] = Colors.rgb.hsl(
                hsl.h,
                hsl.l,
                hsl.s
            )
        ;

        this.handleChangeComplete(
            {
                hsl,
                rgb: {
                    r,
                    g,
                    b,
                },
            }
        );

    };

    render() {

        const { PUBLIC_URL } = process.env;

        return (
            <Router basename={`${ PUBLIC_URL }/`}>
                <div
                    className="app container"
                    style={
                        {
                            backgroundColor: this.state.backgroundColor,
                        }
                    }>
                    <header className="header">

                        <nav>
                            <ul className="navigation">
                                <li className="navigation-item">
                                    <NavLink exact to="/" activeClassName="active" title="Go to homepage">
                                        <img src={ `${ PUBLIC_URL }/imgs/logo.svg` } className="header__logo image" alt="Adidas Logo" />
                                    </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <a href={ `${ PUBLIC_URL }/requirements/REACT-Challenge-eCom.pdf` } rel="noopener noreferrer" target="_blank">
                                        About
                                    </a>
                                </li>
                                <li className="navigation-item">
                                    <a href="https://github.com/LuXDAmore/adidas-interview" rel="noopener noreferrer" target="_blank">
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </header>
                    <main className="content">

                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route
                                path="/easy"
                                render={
                                    props => (
                                        <React.Suspense fallback={<div className="loading spinner" />}>
                                            <Play
                                                key="easy"
                                                { ... props }
                                                hue={ this.state.hue }
                                                luminosity={ this.state.luminosity }
                                                saturation={ this.state.saturation }
                                                played={ this.state.played }
                                                columns="3"
                                                rows="3"
                                                level="0"
                                            />
                                        </React.Suspense>
                                    )
                                }
                            />
                            <Route
                                path="/medium"
                                render={
                                    props => (
                                        <React.Suspense fallback={<div className="loading spinner" />}>
                                            <Play
                                                key="medium"
                                                { ... props }
                                                hue={ this.state.hue }
                                                luminosity={ this.state.luminosity }
                                                saturation={ this.state.saturation }
                                                played={ this.state.played }
                                                columns="4"
                                                rows="4"
                                                level="1"
                                            />
                                        </React.Suspense>
                                    )
                                }
                            />
                            <Route
                                path="/hard"
                                render={
                                    props => (
                                        <React.Suspense fallback={<div className="loading spinner" />}>
                                            <Play
                                                key="hard"
                                                { ... props }
                                                hue={ this.state.hue }
                                                luminosity={ this.state.luminosity }
                                                saturation={ this.state.saturation }
                                                played={ this.state.played }
                                                columns="5"
                                                rows="5"
                                                level="2"
                                            />
                                        </React.Suspense>
                                    )
                                }
                            />
                            <Route exact path="/game-over">
                                <React.Suspense fallback={<div className="loading spinner" />}>
                                    <GameOver />
                                    <BackToHomeButton />
                                </React.Suspense>
                            </Route>
                            <Route exact path="/you-win">
                                <React.Suspense fallback={<div className="loading spinner" />}>
                                    <Win />
                                    <BackToHomeButton />
                                </React.Suspense>
                            </Route>
                            <Route path="*">
                                <React.Suspense fallback={<div className="loading spinner" />}>
                                    <FourZeroFour />
                                    <BackToHomeButton />
                                </React.Suspense>
                            </Route>
                        </Switch>

                    </main>
                    <footer className="footer">

                        <button
                            type="button"
                            aria-pressed={ this.state.played }
                            className="btn btn--small btn--border btn--white"
                            onClick={ this.handleShowSolution }
                        >
                            Show solutions
                        </button>

                        <CirclePicker
                            circleSize={ 16 }
                            circleSpacing={ 8 }
                            colors={ this.state.availableColors }
                            color={ this.state.background }
                            onChangeComplete={ this.handleChangeComplete }
                            width="116px"
                        />

                        <button type="button" className="btn btn--small btn--border btn--white" onClick={ this.handleRandomColor }>
                            Randomize!
                        </button>

                    </footer>
                </div>
            </Router>
        );

    }

}
