import React, { Component } from 'react'

export default class App_Ex4 extends Component {

    constructor (props){
        super(props);
        this.state = {
            count:0,
            message:"Reset"}
    } 

    render() {
    return (
        <div>
          
          <button onClick={()=>{this.setState({count: this.state.count+1, message:"Reset"})}}
          type="button" class="btn btn-primary" > Count: {this.state.count}</button>

            <button onClick={()=>{this.setState({count:0, message:"Clear"})}}
            style={{backgroundColor: "#f78979"}}
            type="button" class="btn btn-primary" > {this.state.message}</button>

      </div>
    )
  }
}

