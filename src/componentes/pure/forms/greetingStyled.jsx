import React, { useState } from 'react'

const loggedStyle = {
    color: 'blue'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false)
    
    return(
    <div style={logged ? loggedStyle : unloggedStyle}>
      { logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)}
        
      <button onClick={() => {
        console.log('Botón pulsado');
        setLogged(!logged);
      }}>{ logged ? 'logout' : 'Login'}</button>
    </div>
    )
}

export default GreetingStyled;