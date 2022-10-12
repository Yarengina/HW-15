// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import Order from '../../pages/Order/Order'

describe('<Order />', () => {
    const mockFn = jest.fn(() => true)
    it('should test button click Ready', () => {
        render(
            <MemoryRouter>
                <Order />
            </MemoryRouter>
        )
        const button = screen.getByTestId('button-ready')
        fireEvent.click(button)
        expect(mockFn()).toBe(true)
    })
})
