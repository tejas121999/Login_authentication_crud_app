import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAllUserAction } from '../redux/Action/postAction'
import DeleteModal from '../components/Modals/DeleteModal';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserAction } from '../redux/Action/authAction';



const Home = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteID] = useState(0);

  const deleteModalOpen = data => {
    setDeleteID(data.id);
    setDeleteModal(true);
  };
  const deleteModalClose = () => {
    setDeleteModal(false);
  };

  const dispatch = useDispatch()

  const { users } = useSelector(state => state.data)
  // console.log(users)
  useEffect(() => {
    dispatch(getAllUserAction())
  })

  // logout user
  const { currentUser } = useSelector((state) => state.user)
  const handleLogout = () => {
    if (currentUser) {
      dispatch(logoutUserAction())
    }
  }
  

  return (
    <div className="container-fluid">
      <DeleteModal
        show={deleteModal}
        onHide={deleteModalClose}
        id={deleteId}
      />
      <div>
        <nav className="navbar navbar justify-content-between">
          <Link to='/add'>
            <button type="button" class="btn btn-link">Add user</button>
          </Link>
          <div
            style={{
              display: 'flex',
              // padding: '2em',
              width: '50%',
              padding: '0.5em 2.3em',
              justifyContent: 'flex-end',
            }}
          >
          <button type="submit" className="btn btn-secondery" onClick={handleLogout}>Log-out</button>
          </div>
        </nav >
      </div >


      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Pincode</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.state}</td>
              <td>{user.city}</td>
              <td>{user.pincode}</td>
              <td>
                <Link
                  class="btn btn-danger"
                  onClick={() => deleteModalOpen(user)}
                >
                  Delete
                </Link>
                <Link
                  className="btn btn-primary"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Home;
