// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import OrderReady from '../../pages/OrderReady/OrderReady'

describe('<OrderReady />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <OrderReady />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })
})
