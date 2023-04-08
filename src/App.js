import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nacao from './components/Nacao';
import Jogador from './components/Jogador'

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nacao/:nacaoId' element={<Nacao/>}/>
          </Routes>              
    </div>
  );
}

export default App;
