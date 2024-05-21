/**
 * *Ejemplo de uso del método 
 * de ciclo de vida en compoenente clase y 
 * el hook de ciclo de vida en componente funcional
 * */

import React, { Component, useEffect } from 'react'

export class lifeCycleExample extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (REDERICE)')
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (REDERICE)')
    },[])
    
    return (
        <div>
        <h1>DidMount</h1>
      </div>
    )
}