import api from '../apis/api-futebol';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Jogador from './Jogador';
import Loading from "./Loading";

function Nacao(){
    
    const [page, setPage] = useState(1);
    const [jogadorSelecionado, setJogadorSelecionado] = useState({});
    const [jogadores, setJogadores] = useState([ ]);
    const [nacao, setNacao] = useState([ ]);
    const { nacaoId } = useParams();
    const [removerLoad, setremoverLoad] = useState(false);  

    const headers = {
        'X-AUTH-TOKEN': '5721fe41-431e-47aa-b74f-45ce383e281d',
        'Content-Type': 'application/json',
      };
      
    const data = {
        nation: parseInt(nacaoId),
      };
    useEffect(() => {
        api.post(`https://futdb.app/api/players/search?page=${page}`, data, { headers })
        .then(response => {
                setJogadores(response.data.items)
                setremoverLoad(true)
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
        <Row></Row>
        <Row>
            <Col>
                <ul className='lista-jogadores'>
                    <li >
                        <p className='titulo-jogador'>POSIÇÃO</p>
                        <p className='titulo-jogador'>NOME</p>
                        <p className='titulo-jogador'>OVERALL</p>
                    </li>
                    {
                        jogadores.map((jogador) => {  
                        return <li className='item-jogador' key={jogador.id} onClick={() =>{selecionar(jogador)}}>
                            <p>{jogador.position}</p>
                            <p>{jogador.name}</p>
                            <p>{jogador.rating}</p>  
                        </li>
                    })
                    }
                </ul>
                {!removerLoad && <Loading />}
                <button className='botao' onClick={anterior}>Anterior</button>       
                <button className='botao' onClick={proxima}>Próxima</button>
            </Col>
            <Col>
                <Jogador infos={jogadorSelecionado}/>
            </Col>
            
        </Row>    
        </div>

    )
}
export default Nacao
