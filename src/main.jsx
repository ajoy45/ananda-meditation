import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import Container from './components/shared/container/COntainer'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </AuthProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
