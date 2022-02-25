import React, { useEffect, useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteUserAction, getAllUserAction } from '../redux/Action/postAction';
import { Button, ButtonGroup } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import DeleteModal from '../components/Modals/DeleteModal';
import { logoutUserAction } from '../redux/Action/authAction';





const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



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


  let history = useHistory()
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.data)

  console.log("user data", users)

  useEffect(() => {
    dispatch(getAllUserAction())
  }, [])

  // logout user
  const { currentUser } = useSelector((state) => state.user)
  // const dispatch = useDispatch();
  const handleLogout = () => {
    if (currentUser) {
      dispatch(logoutUserAction())
    }
  }

  const handleDelete = (_id) => {
    if (window.confirm('are you sure wanted to delete user ?')) {
      dispatch(deleteUserAction(_id))
    }
    // console.log('delete')
  }
  const classes = useStyles();

  return (
    <div>
      <DeleteModal
        show={deleteModal}
        onHide={deleteModalClose}
        id={deleteId}
      />
      <TableContainer component={Paper}>
        <div>
          <nav className="navbar navbar justify-content-between">
            <Button variant="contained" color="primary"
              onClick={() => history.push('/addUser')}
            >
              ADD user
            </Button>
            <Button variant="contained" color="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </nav >
        </div >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">name</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">contact</StyledTableCell>
              <StyledTableCell align="center">action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <StyledTableRow key={user.name}>

                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.street}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.phone}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup variant="text" aria-label="contained primary button group">
                    <Button
                      color="primary"
                      onClick={() => history.push(`/updateUser/${user._id}`)}
                    >
                      edit
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => handleDelete(user._id)}
                      // onClick={() => deleteModalOpen(user)}
                    >
                      delete
                    </Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
