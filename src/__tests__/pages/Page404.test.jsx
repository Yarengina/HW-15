// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '@testing-library/react'
import renderWithRouter from '../utils/renderWithRouter'
import Page404 from '../../pages/Page404/Page404'

describe('<Page404 />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(renderWithRouter(<Page404 />))
        expect(container).toMatchSnapshot()
    })
})
