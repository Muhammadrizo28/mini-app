import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { StreakProvider } from "./context/StreakContext.jsx";
import { PageProvider } from './context/PageContext.jsx';
import {SideMenuProvider} from './context/SideMenuContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideMenuProvider>

      <PageProvider>
  
      <StreakProvider>
        <App />
      </StreakProvider>
        
      </PageProvider>

    </SideMenuProvider>
  </StrictMode>
)
