import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App" style={{backgroundColor:'black',height:'100vh'}}>
      <Home/>
    </div>
    </Router>
  );
}

export default App;
