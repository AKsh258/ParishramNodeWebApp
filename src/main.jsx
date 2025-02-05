import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/Store.jsx'
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// optional configuration
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>

    </Provider>
  </StrictMode>,
)
