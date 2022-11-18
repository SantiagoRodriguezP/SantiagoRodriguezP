import React, {useState} from 'react';
import Perfil from './componentes/Perfil'
 
function App() {
  const [nombre, setnombre] = useState("No tiene nombre");

  const handleChange = (e)  => {
    setnombre(e.target.value);
  }
  return (
    <div>
     <h1>Curso ASP.NET Core y React Hooks {nombre}</h1>
     <input name="nombre" type="text" value={nombre} onChange={handleChange}/>
     <Perfil atributo={nombre}/>
    </div>
   
  );
}

export default App;
