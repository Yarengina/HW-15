// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithRouter from '../utils/renderWithRouter'
import UserOrder from '../../pages/UserOrder/UserOrder'

describe('<UserOrder />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(renderWithRouter(<UserOrder />))
        expect(container).toMatchSnapshot()
    })

    it('should be able to type a phone', () => {
        render(renderWithRouter(<UserOrder />))
        const inputPhone = screen.getByRole('textbox', { name: /phone:/i })
        expect(inputPhone.value).toBe('')

        userEvent.type(inputPhone, '123')
        expect(inputPhone.value).toBe('123')
    })

    it('should be able to type only numbers', () => {
        render(renderWithRouter(<UserOrder />))
        const inputPhone = screen.getByRole('textbox', { name: /phone:/i })
        userEvent.type(inputPhone, 'user')
        expect(inputPhone.value).toBe('')
    })
})
