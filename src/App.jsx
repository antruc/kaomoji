import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Snackbar from '@mui/material/Snackbar'
import kaomoji from './kaomoji.js'
import Cards from './components/Cards.jsx'
import Menu from './components/Menu.jsx'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#000000' },
        background: { default: '#fefefe', paper: '#fefefe' },
        text: { primary: '#161616' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#ffffff' },
        background: { default: '#161616', paper: '#161616' },
        text: { primary: '#fefefe' }
      }
    }
  }
})

export default function App() {
  const [active, setActive] = useState('happy')
  const [toast, setToast] = useState(null)

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text)
      setToast('Copied to clipboard!')
    } catch {
      setToast('There was an error :(')
    }
  }

  function goTo(name) {
    setActive(name)
    window.scrollTo(0, 0)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cards items={kaomoji[active]} onCopy={copy} />
      <Menu items={Object.keys(kaomoji)} active={active} onSelect={goTo} />
      <Snackbar
        open={Boolean(toast)}
        message={toast}
        autoHideDuration={1500}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ bottom: 90 }}
      />
    </ThemeProvider>
  )
}
