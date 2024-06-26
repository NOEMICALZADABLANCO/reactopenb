import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends Component { 
  

  constructor(props){
    super(props);
    this.state = {
      age : 29,
    }
  }

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return (
      <div>
        <h1>Hola { this.props.name}</h1>
        <h2>Tu edad es de: { this.state.age }</h2>
        <div>
          <button onClick={this.birthday}>
            Cumplir años
          </button>
        </div>
      </div>
      
    )
  }

  birthday = () => {
    this.setState((prevState) => (
      {
        age: prevState.age +1
      }
    ))
  }
}
