import api from '../apis/api-futebol';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Jogador from './Jogador';

function Time(){
    const [page, setPage] = useState(1);
    const [jogadorSelecionado, setJogadorSelecionado] = useState({});
    const [jogadores, setJogadores] = useState([ ]);
    const { timeId } = useParams();

    const headers = {
        'X-AUTH-TOKEN': '5721fe41-431e-47aa-b74f-45ce383e281d',
        'Content-Type': 'application/json',
      };
      
    const data = {
        club: parseInt(timeId),
      };
    useEffect(() => {
        api.post(`https://futdb.app/api/players/search?page=${page}`, data, { headers })
        .then(response => {
                setJogadores(response.data.items)
            })
            .catch(error => {
                console.error(error);
            })
    }, [page])


    const proxima = () => {
        if(page === 8){
            alert('Você já está na página final')
        }else{
            setPage(page + 1)
        }
        
    }
    const anterior = () => {
        if(page === 1){
            alert('Você já está na página inicial')
        }
        else{
            setPage(page - 1)
        }        
    }
    const selecionar = (jogador) =>{
        setJogadorSelecionado(jogador)
    }
    
    return (
        <div>
        <Row>
            <Col>
                <ul>
                    {
                        jogadores.map((jogador) => {  
                        return <li key={jogador.id} onClick={() =>{selecionar(jogador)}}>{jogador.position} {jogador.name} {jogador.rating}</li>
                    })
                    }
                </ul>
                <button onClick={anterior}>Anterior</button>       
                <button onClick={proxima}>Próxima</button>
            </Col>
            <Col>
                <Jogador infos={jogadorSelecionado}/>
            </Col>
            
        </Row>    
        </div>

    )
}
export default Time