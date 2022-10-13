// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

const renderWithRouter = (component) => <MemoryRouter>{component}</MemoryRouter>

export default renderWithRouter
