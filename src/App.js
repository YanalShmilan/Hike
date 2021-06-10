import logo from './logo.svg';
import './App.css';
import data from './data';
import Trips from './components/Trips';
import Home from './components/Home';
import TripDetail from './components/TripDetail';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/details/:tripSlug">
          <TripDetail trips={data} />
        </Route>
        <Route exact path="/">
          <Home />
          <Trips data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
