import React from 'react'
import ReactDOM from 'react-dom/client'

import { ToastContainer } from 'react-toastify'

import App from './App'
import Layout from './components/layout/Layout'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <main className='min-h-[calc(100vh-160px)]'>
        <App />
      </main>
    </Layout>
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
  </React.StrictMode>
)
