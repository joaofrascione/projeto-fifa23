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
    const [time, setTime] = useState([ ]);
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
        api.get(`/clubs/${timeId}`, {
            headers: {
                'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
            }
        }).then((result) => {
                setTime(result)
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
                <h1 className='titulo'><span>{time.data?.club.name}</span></h1>
                <ul className='lista-jogadores'>
                    <li >
                        <p className='titulo-jogador'>POSIÇÃO</p>
                        <p className='titulo-jogador'>NOME</p>
                        <p className='titulo-jogador'>OVERALL</p>
                    </li>
                    {
                        jogadores.map((jogador) => {  
                        return <li key={jogador.id} className='item-jogador' onClick={() =>{selecionar(jogador)}}> 
                            <p>{jogador.position}</p>
                            <p>{jogador.name}</p>
                            <p>{jogador.rating}</p>  </li>
                    })
                    }
                </ul>
                <button className='botao' onClick={anterior}>Anterior</button>       
                <button className='botao' onClick={proxima}>Próxima</button>
            </Col>
            <Col>
                <h1 className='titulo'>Dados do jogador Selecionado </h1>
                <Jogador infos={jogadorSelecionado}/>
            </Col>
            
        </Row>    
        </div>

    )
}
export default Time