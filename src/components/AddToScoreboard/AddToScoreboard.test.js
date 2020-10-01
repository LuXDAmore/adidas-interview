import React from 'react';
import { render } from '@testing-library/react';
import AddToScoreboard from './AddToScoreboard';

test(
    'renders',
    () => {

        const { getByText } = render( <AddToScoreboard /> )
            , linkElement = getByText( /HALL/i )
        ;

        expect( linkElement ).toBeInTheDocument();

    }
);
