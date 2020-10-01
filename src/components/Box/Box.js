// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Style.scss';

// Declaration
export default class Box extends React.Component {

    handleClick = () => {

        typeof this.props.onResult === 'function' && this.props.onResult(
            this.props.isWinner
        );

    };

    handleKeyPress = e => {

        e.preventDefault();

        if( e.charCode === 13 || e.keyCode === 13 )
            this.handleClick();

    };

    render() {

        return (
            <button
                type="button"
                className="box"
                aria-label="Click me"
                data-reveal={ this.props.reveal }
                data-is-winner={ this.props.isWinner }
                style={
                    {
                        backgroundColor: this.props.backgroundColor,
                    }
                }
                onClick={ this.handleClick }
                onKeyPress={ this.handleKeyPress }
            />
        );

    }

}

// Validations
Box.propTypes = {
    backgroundColor: PropTypes.string,
    reveal: PropTypes.bool,
    onResult: PropTypes.func,
    isWinner: PropTypes.bool,
};
