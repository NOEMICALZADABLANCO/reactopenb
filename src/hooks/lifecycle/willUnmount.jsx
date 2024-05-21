/**
 * *Ejemplo de uso del métod del componentWillUnmount para componente clase 
 * Ejemplo de uso de hook para componente funcional
 * Cuando el componente desaparece
 * */

import React, { Component, useEffect } from 'react'

export class willUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }
  render() {
    return (
      <div>
        <h1>
            WillUnmount
        </h1>
      </div>
    )
  }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        return () => {
        console.log('Comportamiento antes de que el componente desaparezca')
        }
    },[]);
    return (
        
            <div>
            <h1>
                WillUnmount
            </h1>
            </div>
        );
}

