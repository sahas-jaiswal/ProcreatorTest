import logo from './logo.svg';
import './App.css';
import LandingPage from './Containers/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './Containers/HomeScreen';
import LocalStoreScreen from './Containers/LocalStoreScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage}/>
          <Route path='/home' component={HomeScreen}/>
          <Route path='/local' component={LocalStoreScreen}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
