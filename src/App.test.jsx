import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'
import kaomoji from './kaomoji.js'

// jsdom has no clipboard and no scrollTo, stub both
const writeText = vi.fn().mockResolvedValue()
Object.defineProperty(navigator, 'clipboard', { value: { writeText } })
window.scrollTo = vi.fn()

const tabs = () =>
  screen.getAllByRole('button').filter((b) => b.ariaLabel !== 'copy')

test('copies the kaomoji next to the clicked button', async () => {
  render(<App />)
  await userEvent.click(screen.getAllByLabelText('copy')[0])

  expect(writeText).toHaveBeenCalledWith(kaomoji.happy[0])
  expect(await screen.findByText('Copied to clipboard!')).toBeDefined()
})

test('switches category from the menu', async () => {
  render(<App />)
  await userEvent.click(tabs()[4])

  expect(screen.getByText(kaomoji.pets[0])).toBeDefined()
  expect(screen.queryByText(kaomoji.happy[0])).toBeNull()
})
