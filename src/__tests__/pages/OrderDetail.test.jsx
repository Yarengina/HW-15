// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import OrderDetail from '../../pages/Order/OrderDetail'

describe('<OrderDetail />', () => {
    const books = [
        {
            id: 101,
            title: 'Война и мир - Л.Н.Толстой',
            description:
                'Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах. Эпилог романа доводит повествование до 1820 года.',
            price: 800,
            rest: 10,
            quantity: 1,
        },
    ]

    it('should render book detail with id 101', () => {
        render(
            <MemoryRouter>
                <OrderDetail books={books} />
            </MemoryRouter>
        )
        const bookElement = screen.getByTestId('todo-101')
        expect(bookElement).toBeInTheDocument()
        expect(bookElement).toHaveTextContent('Война и мир - Л.Н.Толстой')
        expect(bookElement).toHaveTextContent(800)
        expect(bookElement).toContainHTML('href="/101"')
    })

    it('should render successfully and match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <OrderDetail books={books} />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })
})
