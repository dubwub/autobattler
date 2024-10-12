import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './style/style.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider><App /></MantineProvider>
  </React.StrictMode>,
)
