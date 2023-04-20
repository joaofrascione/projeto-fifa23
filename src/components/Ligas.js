import api from '../apis/api-futebol'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Ligas(){

    const [page, setPage] = useState(1);
    const [ligas, setLigas] = useState([ ]);

    useEffect(() => {
        api.get(`/leagues?page=${page}`, {
            headers: {
             'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
            }
        }).then((result) => {
            setLigas(result.data.items)
        })

    }, [page])

    const proxima = () => {
        if(page === 3){
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
    return (
        <div className='esp'>
            <h1 className='titulo'>Encontre pela liga selecionada abaixo</h1>
            <ul className='lista'>
                {ligas.map((liga) => {
                    if(liga.id === 0) return   
                    const imagePath = require(`../images/leagues/${liga.id}.png`);
                    return (
                        <Link to={`/times/${liga.id}`} >
                            <li key={liga.id}>
                                <div><img src={imagePath} alt={liga.name} style={{width: '50%', height: 'auto' }} /></div>                           
                                {liga.name}
                            </li>
                        </Link>    
                    );
                })}
            </ul>
            <button className='botao' onClick={anterior}>Anterior</button>       
            <button className='botao' onClick={proxima}>Próxima</button>
        </div>

    )
}
export default Ligas;