import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState()

  const { email, password } = state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('please enter email address')
    }
    if (!password) {
      setError('please enter password')
    }
    else {

      setError('')
    }
  }
  const handleChange = (e) => {
    setState({ ...state, [e.target.value]: e.target.name })
  }
  return (
    <div className='container mt-5'>
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name='email'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            value={email}
            required
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name='password'
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            required
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-block btn-primary">Login</button>
        <hr />
        <Link to='/register'>
          <button type="submit" className="btn btn-block btn-secondery">Register</button>
        </Link>
      </form>
    </div>
  )
}

export default Login