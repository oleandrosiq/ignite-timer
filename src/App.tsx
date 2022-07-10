// External Libraries
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// Routes
import { Router } from './Router'

// Components
import { GlobalStyle } from './styles/global'

// Styles
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
