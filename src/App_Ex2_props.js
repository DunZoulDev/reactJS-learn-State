import React, { Component } from 'react'

export default class App_Ex2 extends Component {
  render() {
    return (
      <div>
        <Entry label="Username" type="text" hint="please enter email"/>
        <Entry label="password" type="password" hint="please enter password"/>
      </div>
    )
  }
}

class Entry extends Component {

    /*This is props to get value from default class*/
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
          <span> {this.props.label}</span>
          <label for=""></label>
          <input type={this.props.type} name="" id=""  placeholder={this.props.hint} security=''/>
        

      </div>
    )
  }
}

