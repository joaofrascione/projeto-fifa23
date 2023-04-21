import api from "../apis/api-futebol";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Times() {
  const [times, setTimes] = useState([]);
  const [equipe, setEquipe] = useState({});
  const [liga, setLiga] = useState({});
  const { ligaId } = useParams();
  
  useEffect(() => {
    api.get(`/leagues/${ligaId}`, {
      headers: {
       'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
      }
    }).then((result) => {
      setLiga(result)
    })

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

const verificarImage = (equipe) => {
  try{
     return <img src={require(`../images/clubs/${equipe.id}.png`)} alt={equipe.name} style={{width: '100px', height: 'auto', margin: '10px auto'}} />
  }catch{
    return <img src={require(`../images/clubs/sem-imagem.png`)} alt={equipe.name} style={{width: '100px', height: 'auto' }} />
  }
}

const verificarExistencia = (equipe) => {
  if(!equipe.id) return
  return <Link to={`/time/${equipe.id}`}><button className='botao ver-jogadores'>Ver Jogadores dessa equipe</button></Link>
}

  return (
    <Row>
        <Col>
            <h1 className="titulo"><span>{ liga.data?.league.name}</span> </h1>
            <ul className="lista">
                {times.map((equipe) => {
                    return <li key={equipe.id} onClick={() =>{selecionar(equipe)}}>
                    <div>{verificarImage(equipe)}</div>
                    {equipe.name} 
                    </li>;
                })}
            </ul>
        </Col>
        <Col>   
                <h1 className="titulo">Time selecionado clique no botão para descobrir seus jogadores</h1>
                <ul className="lista">
                <li className="item-lista">
                      <div className="card-time-unico">
                        <p>{equipe.name}</p>
                        {verificarImage(equipe)} 
                        {verificarExistencia(equipe)}
                      </div>
                    </li>
                
                </ul>
        </Col>
    </Row> 
  );
}
export default Times;
