import logo from './logo.svg';
import './App.css';
import data from './data';
import Trips from './components/Trips';
import Home from './components/Home';
import TripDetail from './components/TripDetail';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import FourOfour from './components/FourOfour';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/details/:tripSlug">
          <TripDetail trips={data} />
        </Route>
        <Route path="/trips/">
          <Home />
          <Trips data={data} />
        </Route>
        <Route path="/fourOfour">
          <FourOfour />
        </Route>

        <Route exact path="/">
          <Home />
          <Trips data={data} />
        </Route>
        <Route path="/">
          <FourOfour />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
