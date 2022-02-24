import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register'
import UserRoute from './components/UserRoute';
import { ToastContainer } from 'react-toastify';
import AddUser from './pages/AddUser';
import GetUserById from './pages/GetUserById';
import UpdateUser from './pages/UpdateUser';


function App() {
  return (
    <>
      <ToastContainer hideProgressBar style={{ marginTop: '60px' }} />
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <UserRoute exact path='/' component={Home} />
          <Route exact path='/addUser' component={AddUser} />
          <Route exact path='/getUserByID/:id' component={GetUserById} />
          <Route exact path='/updateUser/:id' component={UpdateUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
