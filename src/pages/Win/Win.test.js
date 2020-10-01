import React from 'react';
import { render } from '@testing-library/react';
import Win from './Win';

test(
    'renders',
    () => {

        const { getByText } = render( <Win /> )
            , linkElement = getByText( /And the winner is/i )
        ;

        expect( linkElement ).toBeInTheDocument();

    }
);
