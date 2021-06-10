import logo from './logo.svg';
import './App.css';
import data from './data';
import Trips from './components/Trips';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Trips data={data} />
    </div>
  );
}

export default App;
