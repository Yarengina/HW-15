// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../utils/renderWithRouter'
import Order from '../../pages/Order/Order'

describe('<Order />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(<Order />)
        expect(container).toMatchSnapshot()
    })

    it('should test button click Ready', () => {
        const handleReady = jest.fn()

        render(<Order handleReady={handleReady} />)

        const button = screen.getByTestId('button-ready')
        userEvent.click(button)
        expect(handleReady).toHaveBeenCalled()
    })
})
