// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Style.scss';

// Component
export default class AddToScoreboard extends React.Component {

    state = {
        value: '',
    };

    handleSubmit = e => {

        e.preventDefault();

        if( ! this.props.match?.params?.points )
            return false;

        const data = localStorage.getItem(
                'hall-of-fame'
            )
            // Points
            , p = parseInt(
                this.props.match.params.points,
                10
            )
            , userData = data
                ? JSON.parse(
                    data
                )
                : {
                    [ this.state.value ]: 0,
                }
        ;

        if( userData[ this.state.value ] ) {

            const points = parseInt(
                userData[ this.state.value ],
                10
            );

            userData[ this.state.value ] = points + p;

        } else
            userData[ this.state.value ] = p;

        localStorage.setItem(
            'hall-of-fame',
            JSON.stringify(
                userData
            )
        );

        this.props.history.push(
            '/'
        );

        return false;

    };

    handleChange = e => {

        this.setState(
            {
                value: e.target.value,
            }
        );

    };

    render() {

        return (
            <section className="add-to-scoreboard">
                <header>
                    <h5>HALL OF FAME</h5>
                    <p>
                        <em>
                            <small>Write your name in the stars</small>
                        </em>
                    </p>
                </header>
                <form className="form" onSubmit={ this.handleSubmit }>
                    <fieldset>
                        <input required placeholder="Luke Skywalker" name="nickname" autoComplete ="nickname" value={ this.state.value } onChange={ this.handleChange } />
                        <button type="submit" className="btn btn--large" disabled={ ! this.state.value }>
                            SEND
                        </button>
                    </fieldset>
                </form>
            </section>
        );

    }

}

// Validations
AddToScoreboard.propTypes = {
    // Router
    history: PropTypes.shape(
        {
            push: PropTypes.func.isRequired,
        }
    ),
    match: PropTypes.object,
};
