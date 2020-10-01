import React from 'react';
import { render } from '@testing-library/react';
import GameOver from './GameOver';

test(
    'renders',
    () => {

        const { getByText } = render( <GameOver /> )
            , linkElement = getByText( /YOU LOOSE/i )
        ;

        expect( linkElement ).toBeInTheDocument();

    }
);
