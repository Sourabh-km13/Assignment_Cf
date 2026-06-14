
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter} from 'react-router'

import AppRoutes from './routes/Routes.tsx'
import { UserProvider } from './context/UserProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </UserProvider>
)
