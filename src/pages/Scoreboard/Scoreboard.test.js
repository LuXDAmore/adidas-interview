import React from 'react';
import { render } from '@testing-library/react';
import Scoreboard from './Scoreboard';

test(
    'renders',
    () => {

        const { getByText } = render( <Scoreboard /> )
            , linkElement = getByText( /Scoreboard/i )
        ;

        expect( linkElement ).toBeInTheDocument();

    }
);
