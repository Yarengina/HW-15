// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import UserOrder from '../../pages/UserOrder/UserOrder'

describe('<UserOrder />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <UserOrder />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    it('should be able to type a phone', () => {
        render(
            <MemoryRouter>
                <UserOrder />
            </MemoryRouter>
        )
        const inputPhone = screen.getByRole('textbox', { name: /phone:/i })
        expect(inputPhone.value).toBe('')

        userEvent.type(inputPhone, '123')
        expect(inputPhone.value).toBe('123')
    })

    it('should be able to type only numbers', () => {
        render(
            <MemoryRouter>
                <UserOrder />
            </MemoryRouter>
        )
        const inputPhone = screen.getByRole('textbox', { name: /phone:/i })
        userEvent.type(inputPhone, 'user')
        expect(inputPhone.value).toBe('')
    })
})
