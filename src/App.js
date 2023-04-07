import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Row>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          
        </Row>
        
    </div>
  );
}

export default App;
