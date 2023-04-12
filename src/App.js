import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nacao from './components/Nacao';
import Times from './components/Times'
import Time from './components/Time'
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
          <Row>
            <Col><NavLink to='/'><button>Topo</button></NavLink></Col>
            <Col><h1>Consulta FIFA23</h1></Col>
            <Col></Col>
          </Row> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nacao/:nacaoId' element={<Nacao/>}/>
            <Route path='/times/:ligaId' element={<Times/>}/>
            <Route path='/time/:timeId' element={<Time/>}/>
          </Routes>              
    </div>
  );
}

export default App;
