import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; 
import About from './components/about';
import Home from './components/Home';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route path ="/album/:id" element={<Photos/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

