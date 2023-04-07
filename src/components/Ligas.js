import api from '../apis/api-futebol'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

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
        <div>
            <ul>
                {ligas.map((liga) => {  
                    return <li><NavLink to={`/Nacao/${liga.id}`} key={liga.id}>{liga.name}</NavLink></li>
                })
                }
            </ul>
            <button onClick={anterior}>Anterior</button>       
            <button onClick={proxima}>Próxima</button>
        </div>

    )
}
export default Ligas;