import React,{ useState, useRef, useEffect } from 'react'

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }


    // useEffect(() =>{
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando Referencia a elemento del DOM:");
    //     console.log(miRef);
    // })

    useEffect(() => {
            console.log("Cambio en el estado del contador1");
            console.log("Mostrando Referencia a elemento del DOM:");
            console.log(miRef);
    }, [contador1]);


  return (
    <div>
      <h1>*** Ejemplo de useState, useRef, y useEffect () ***</h1>
      <h2>CONTADOR1: {contador1}</h2>
      <h2>CONTADOR2: {contador2}</h2>
      <h2 ref={miRef}>Ejemplo de elemento referenciado</h2>

      <button onClick={incrementar1}>Incrementar  contador1</button>
      <button onClick={incrementar2}>Incrementar  contador2</button>
    </div>
  )
}

export default Ejemplo2
