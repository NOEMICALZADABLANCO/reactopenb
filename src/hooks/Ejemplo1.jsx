import React, { useState} from 'react'

const Ejemplo1 = () => {

  const valorInicial = 0;

  const personaInicial = {
    nombre : "Noemi",
    email: "noemicalzada@gmail.com"
  }

  const [contador, setcontador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  function incrementarContador(){
    setcontador(contador + 1);
  }

  function incrementarPersona(){
    setPersona(
      {
        nombre: "María",
        email: "maria@gmail.com"
      }
    )
  }
  return (
    <div>
      <h1>*** Ejemplo de useState () ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h4>EMAIL: {persona.email}</h4>
      <button onClick={incrementarContador}>Incrementar  contador</button>
      <button onClick={incrementarPersona}>Actualizar persona</button>

    </div>
  )
}

export default Ejemplo1;
