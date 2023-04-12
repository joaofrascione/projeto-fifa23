import api from "../apis/api-futebol";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Times() {
  const [times, setTimes] = useState([]);
  const [equipe, setEquipe] = useState({});
  const { ligaId } = useParams();

  useEffect(() => {
    const buscarTimes = async () => {
      const arrTimes = [];
      for (let i = 1; i <= 35; i++) {
        const resultadoTimes = await api
          .get(`/clubs?page=${i}`, {
            headers: {
              "x-auth-token": "5721fe41-431e-47aa-b74f-45ce383e281d",
            },
          })
        const timesFiltrado = resultadoTimes.data.items.filter(equipe => parseInt(ligaId) === equipe.league)
        arrTimes.push(...timesFiltrado)            
      }
      setTimes(arrTimes)
    };
    buscarTimes();
    
  }, [ligaId]);
  const selecionar = (equipe) =>{
    setEquipe(equipe)
} 
  return (
    <Row>
        <Col>
            <ul>
                {times.map((equipe) => {
                    return <li key={equipe.id} onClick={() =>{selecionar(equipe)}}>{equipe.name}</li>;
                })}
            </ul>
        </Col>
        <Col>
                <ul>
                    <li>{equipe.name}</li>
                    <Link to={`/time/${equipe.id}`}><button>Ver Jogadores dessa equipe</button></Link>
                </ul>
        </Col>
    </Row> 
  );
}
export default Times;
