// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import LoginPass from '../../pages/LoginPass/LoginPass'

describe('<LoginPass />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <LoginPass />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    it('should test initially empty inputs', () => {
        render(
            <MemoryRouter>
                <LoginPass />
            </MemoryRouter>
        )
        const inputEmail = screen.getByPlaceholderText(/enter your email.../i)
        const inputPassword = screen.getByPlaceholderText(/enter your password.../i)

        expect(inputEmail.value).toBe('')
        expect(inputPassword.value).toBe('')
    })

    it('should be able to type an email', () => {
        render(
            <MemoryRouter>
                <LoginPass />
            </MemoryRouter>
        )
        const inputEmail = screen.getByPlaceholderText(/enter your email.../i)
        userEvent.type(inputEmail, 'user@gmail.com')
        expect(inputEmail.value).toBe('user@gmail.com')
    })

    it('should be able to type a password', () => {
        render(
            <MemoryRouter>
                <LoginPass />
            </MemoryRouter>
        )
        const inputPassword = screen.getByPlaceholderText(/enter your password.../i)
        userEvent.type(inputPassword, 'Password!')
        expect(inputPassword.value).toBe('Password!')
    })

    it('should show email error message on invalid email', () => {
        render(
            <MemoryRouter>
                <LoginPass />
            </MemoryRouter>
        )
        const inputEmail = screen.getByPlaceholderText(/enter your email.../i)
        userEvent.type(inputEmail, 'usergmail.com')

        const logInButton = screen.getByRole('button', { name: /log in/i })
        userEvent.click(logInButton)

        const emailError = screen.getByText(/email is not valid/i)
        expect(emailError).toBeInTheDocument()
    })

    it('should show password error message on invalid password', () => {
        render(
            <MemoryRouter>
                <LoginPass />
            </MemoryRouter>
        )
        const inputPassword = screen.getByPlaceholderText(/enter your password.../i)
        userEvent.type(inputPassword, '1234')

        const logInButton = screen.getByRole('button', { name: /log in/i })
        userEvent.click(logInButton)

        const passwordError = screen.getByText(/at least 6 characters/i)
        expect(passwordError).toBeInTheDocument()
    })
})