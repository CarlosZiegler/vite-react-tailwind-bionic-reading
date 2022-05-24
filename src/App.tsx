import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NotificationsProvider } from '@mantine/notifications'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'

import './App.css'
import { Layout } from './components/Layout'
import { NotFound } from './components/NotFound'
import './translations/i18n'
import { Home } from './pages/Home'
import { BionicReaderPage } from './components/BionicReaderPage'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, primaryColor: 'green' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider position="top-right" zIndex={2077}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/playground" element={<BionicReaderPage />} />
                <Route index element={<Home />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
