import api from '../apis/api-futebol'
import { useState, useEffect } from 'react'

function Jogador(){
    useEffect(() => {
        api.get('/players', {
            headers: {
             'x-auth-token': '5721fe41-431e-47aa-b74f-45ce383e281d'   
            }
        }).then((result) => {
            console.log(result)
        })

    }, [])
    return (
        <div>
            componente Jogador
        </div>
    )

}
export default Jogador