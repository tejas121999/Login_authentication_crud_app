import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register'
import UserRoute from './components/UserRoute';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer hideProgressBar style={{ marginTop: '60px' }} />
      <Router>
        <Switch>
          <UserRoute exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
