import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Search from './components/users/Search';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/user/:login" component={User}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
