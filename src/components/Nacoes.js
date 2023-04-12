import api from '../apis/api-futebol'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Nacoes(){
    
    const [page, setPage] = useState(1);
    const [nacao, setNacao] = useState([ ]);

    useEffect(() => {
        api.get(`/nations?page=${page}`, {
            headers: {
             'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
            }
        }).then((result) => {
            setNacao(result.data.items)
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
    return (
        <div>
       
            <ul>        
                {nacao.map((pais) => {  
                    return <li key={pais.id}><Link to={`/nacao/${pais.id}`} >{pais.name}</Link></li>
                })
                }
            </ul>
            <button onClick={anterior}>Anterior</button>       
            <button onClick={proxima}>Próxima</button>
        </div>
        
    )
}
export default Nacoes