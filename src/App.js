import {  Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from "history";
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  const history = createBrowserHistory();  
  return (
    <div className="App">
        <Router history={history}  >
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route  path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id" >
              <Detail />
            </Route>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
