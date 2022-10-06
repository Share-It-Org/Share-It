// app.test.js
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {App} from '../src/routes/App'
import { LocationDisplay } from '../src/routes/Homepage'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

// does the login page render
test('full app rendering', async () => {
  render(<App />, {wrapper: BrowserRouter})

  // verify page content for default route
  expect(screen.getByText(/Login/i)).toBeInTheDocument()
})

// will have to confirm this with backend 
test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

// this test is setup for the hompage 
test('rendering a component that uses useLocation', () => {
  const route = '/Homepage'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  // verify location display is rendered
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})

// test that homepage routes to profile 
test('app navigating', async () => {
  const route = '/Homepage'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <Homepage />
    </MemoryRouter>,
  )

  const user = userEvent.setup()
  // verify page content for expected route after navigating
  await user.click(screen.getByText(/Profile/i))
  expect(screen.getByText(/Add New Stuff/i)).toBeInTheDocument()
})