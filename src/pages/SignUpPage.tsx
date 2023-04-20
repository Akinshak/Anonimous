import { useState } from 'react'

import Register from '../components/signup/Register'
import Login from '../components/signup/Login'

function SignUpPage() {
  const [login, setLogin] = useState(true)

  return login ? (
    <Login setLogin={setLogin} />
  ) : (
    <Register setLogin={setLogin} />
  )
}

export default SignUpPage
