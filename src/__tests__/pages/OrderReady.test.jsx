// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '@testing-library/react'
import renderWithRouter from '../utils/renderWithRouter'
import OrderReady from '../../pages/OrderReady/OrderReady'

describe('<OrderReady />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(renderWithRouter(<OrderReady />))
        expect(container).toMatchSnapshot()
    })
})
