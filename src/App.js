import React, { Component } from 'react'

export default class App extends Component {
  render() {
    
    
    let count = 0
    function plus(){
      count++;
    }

    return (
      <div>
        {/* This is comment in JSX */}
        <h1>Hello My first web page</h1>
        <h1>Header {plus()}</h1>
        
        <span>{count}</span>
    
      </div>
    )
  }
}
