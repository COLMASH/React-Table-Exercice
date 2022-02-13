import React from 'react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import {render, screen, fireEvent, waitFor, cleanup, act} from '@testing-library/react'
import 'regenerator-runtime/runtime'

import {CustomTable} from '../CustomTable'

// <CustomTable/> Unit/Integration Testing
describe('<CustomTable/>', () => {
    beforeEach(() => {
        act(() => {
            render(<CustomTable/>)
        })
    })

    afterEach(() => {
    })
    test("-1- check if 'CustomTable' is rendered", async () => {
        const comercioHeader = screen.getByText(/Comercio/i)
        expect(comercioHeader).toBeInTheDocument()
        //     screen.debug(undefined, 100000)
    })
})
