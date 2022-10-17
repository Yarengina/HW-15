// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { navigate } from '@reach/router'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../utils/renderWithRouter'
import Order from '../../pages/Order/Order'

jest.mock('@reach/router', () => ({
    navigate: jest.fn(),
}))

describe('<Order />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(<Order />)
        expect(container).toMatchSnapshot()
    })

    it('should navigate from page Order to page User_order', () => {
        render(<Order />)

        const button = screen.getByTestId('button-ready')
        expect(button).toBeInTheDocument()

        userEvent.click(button)
        expect(navigate).toHaveBeenCalledTimes(1)
    })
})
