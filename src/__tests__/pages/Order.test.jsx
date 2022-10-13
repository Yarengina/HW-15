// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import renderWithRouter from '../utils/renderWithRouter'
import Order from '../../pages/Order/Order'

describe('<Order />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(renderWithRouter(<Order />))
        expect(container).toMatchSnapshot()
    })

    it('should test button click Ready', () => {
        const handleReady = jest.fn()

        render(renderWithRouter(<Order handleReady={handleReady} />))

        const button = screen.getByTestId('button-ready')
        fireEvent.click(button)
        expect(handleReady).toHaveBeenCalled()
    })
})
