import api from '../apis/api-futebol'
import { useState, useEffect } from 'react'

function Jogador({ infos }){
    
    const [liga, setLiga] = useState({ });
    const [clube, setClube] = useState({ });
    const [nacao, setNacao] = useState({ });
   
    useEffect(() => {
        if(infos.id !== undefined){
            api.get(`/nations/${infos.nation}`, {
                headers: {
                'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
                }
            }).then((result) => {
                setNacao(result.data.nation)
            })
        }
    }, [infos])

    useEffect(() => {
        if(infos.id !== undefined){
            api.get(`/clubs/${infos.club}`, {
                headers: {
                'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
                }
            }).then((result) => {
                setClube(result.data.club)
            })
        }
    }, [infos])
    
    useEffect(() => {
        if(infos.id !== undefined){
            api.get(`/leagues/${infos.league}`, {
                headers: {
                'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
                }
            }).then((result) => {
                setLiga(result.data.league)
            })
        }
    }, [infos])
    return (
        <div>
            <ul>
               <li>Nome: {infos.name}</li>
               <li>Idade: {infos.age}</li>
               <li>Nacionalidade: {nacao.name}</li> 
               <li>Posição: {infos.position}</li>
               <li>Liga: {liga.name}</li>
               <li>Clube: {clube.name}</li>
               <li>Overall: {infos.rating}</li>
            </ul>
        </div>
    )

}
export default Jogador