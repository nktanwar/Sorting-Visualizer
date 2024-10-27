import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'; // Import RecoilRoot


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot> {/* Wrap your App with RecoilRoot */}
      <div className='bg-white'>
      <App />

      </div>
   
    </RecoilRoot>
  </StrictMode>,
)
