import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastifyComponent = () => {
  const [login, setLogin] = useState<string>('')
  const [loginError, setLoginError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [isLoginTouched, setIsLoginTouched] = useState<boolean>(false)
  const [isPasswordTouched, setIsPasswordTouched] = useState<boolean>(false)

  const notify = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('Success') : reject('Error')
      }, 3000)
    })

    toast.promise(promise, {
      pending: 'Your data is being sent ...',
      success: 'Data sent successfully ...',
      error: 'Data not sent ...'
    })
  }

  const validateLogin = (login: string) => {
    if (login.trim() === '') {
      setLoginError('Login is required')
      return false
    } else if (login.length < 3 || login.length > 15) {
      setLoginError('Login must be between 3 and 15 characters')
      return false
    }
    setLoginError('')
    return true
  }

  const validatePassword = (password: string) => {
    if (password.trim() === '') {
      setPasswordError('Password is required')
      return false
    } else if (password.length < 5 || password.length > 20) {
      setPasswordError('Password must be between 5 and 20 characters')
      return false
    }
    setPasswordError('')
    return true
  }

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
    setIsLoginTouched(true)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setIsPasswordTouched(true)
  }

  useEffect(() => {
    if (isLoginTouched) {
      validateLogin(login)
    }
    if (isPasswordTouched) {
      validatePassword(password)
    }
    if (isLoginTouched && isPasswordTouched) {
      setIsFormValid(validateLogin(login) && validatePassword(password))
    }
  }, [login, password, isLoginTouched, isPasswordTouched])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      console.log('Login:', login)
      console.log('Password:', password)
    }
    setLogin('')
    setPassword('')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" value={login} onChange={handleLoginChange} />
          {loginError && <div className="error">{loginError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button onClick={notify} type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default ToastifyComponent