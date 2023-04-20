import Home from './pages/Home'
import Messages from './pages/Messages'
import NewMessage from './pages/NewMessage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignUpPage />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/user/:user' element={<NewMessage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
