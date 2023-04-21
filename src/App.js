import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nacao from './components/Nacao';
import Times from './components/Times'
import Time from './components/Time'
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import logoFifa from '../src/images/clubs/undefined.png';
import eaSport from '../src/images/clubs/easport.png';

function App() {
  return (
    <div className="App">
          <Row>
            <div className='topo'>
              <Col><NavLink to='/'><button className='botao'>VOLTAR AO INICIO</button></NavLink></Col>
              <Col><h1>Dados FIFA23</h1></Col>
              <Col><img className='topo-logo' src={logoFifa} /></Col>
            </div>
            
          </Row> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nacao/:nacaoId' element={<Nacao/>}/>
            <Route path='/times/:ligaId' element={<Times/>}/>
            <Route path='/time/:timeId' element={<Time/>}/>
          </Routes> 

          <Row>
            <div className='rodape'>
              <Col><img className='topo-logo' src={eaSport} /></Col>
              <Col><img className='topo-logo' src={logoFifa} /></Col>
            </div>
          </Row>              
    </div>
  );
}

export default App;
