// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import About from '../../pages/About/About'

describe('<About />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })
})
