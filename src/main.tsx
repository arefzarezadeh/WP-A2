import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import Fonts from './fonts.tsx'
import { Toaster } from './components/ui/toaster.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider forcedTheme='light'>
      <Toaster />
      <Fonts />
      <App />
    </Provider>
  </StrictMode>,
)
