import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { registerUserAction } from '../redux/Action/authAction'

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState()

  const { email, password, name } = state;

  const { currentUser } = useSelector((state) => state.user)
  console.log(currentUser)

  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      history.push('/')
    }
  }, [currentUser, history])

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('please enter email address')
    }
    if (!password) {
      setError('please enter password')
    }
    if (password !== password) {
      setError('password is not match')
    }
    if (!name) {
      setError('please enter password')
    }
    else {
      dispatch(registerUserAction())
      setState({ email: '', name: '', password: '' })
      setError('')
    }
  }
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }
  return (
    <div className='container mt-5'>
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="name"
            name='name'
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={handleChange}
            value={name}
            required
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
        </div>
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
        <button type="submit" className="btn btn-block btn-primary">Register</button>
        <hr />
        <Link to='/login'>
          <button type="submit" className="btn btn-block btn-secondery">Login</button>
        </Link>
      </form>
    </div>
  )
}

export default Register