import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserAction } from '../redux/Action/authAction';


const Home = () => {
  // logout user
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (currentUser) {
      dispatch(logoutUserAction())
    }
  }

  return (
    <div>
      Home
      <button type="submit" className="btn btn-block btn-secondery" onClick={handleLogout}>Log-out</button>
    </div>
  )
}

export default Home