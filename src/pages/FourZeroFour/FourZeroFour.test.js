import React from 'react';
import { render } from '@testing-library/react';
import FourZeroFour from './FourZeroFour';

test(
    'renders',
    () => {

        const { getByText } = render( <FourZeroFour /> )
            , linkElement = getByText( /404/i )
        ;

        expect( linkElement ).toBeInTheDocument();

    }
);
