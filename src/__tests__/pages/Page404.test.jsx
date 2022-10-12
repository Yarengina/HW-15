// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import Page404 from '../../pages/Page404/Page404'

describe('<Page404 />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <Page404 />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })
})
