import React, { useEffect, useState } from "react";
import axios from 'axios';

function Perfil(props){
    const [paises, setpaises] = useState([]);
    const [status, cambiaStatus] = useState(false);
    useEffect(() => {
       axios.get('https://restcountries.com/v2/all')
            .then(resultado => {
                setpaises(resultado.data);
                cambiaStatus(true);
            }).catch(err => {
                cambiaStatus(true);
            });
    }, []);
    if(status){
        return (
            <ul>
                {paises.map((pais, indice) => 
                    <li key={indice}>{pais.name}</li>
                )}
            </ul>
        );
    }else{
        return(<h1>Cargando...</h1>);
        
    }
   
}

export default Perfil;