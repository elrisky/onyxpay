import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  serviceWorker  from "./serviceWorker.js";
import { ThemeProvider } from './pages/user-dashboard/ThemeContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
    <App />
    </ThemeProvider>
  </StrictMode>,
);

serviceWorker();