import React, { Component } from 'react'



export default class App_Ex3 extends Component {

    //this is arrow function
    onClickBtn_arrow_fun_1 = ()=> {
        alert("DunDevWeb.com")
    }

  render() {
    return (
      <div>
            <button type="button" onClick={()=> {alert("Click Confirm") }}>Confirm</button>
            <button type="button" onClick={this.onClickBtn_arrow_fun_1}>Cancel</button>
            <Props_myButton onSubmit_dun={()=>{alert("my button!!!!")}} />
      </div>
    )
  }
}

class Props_myButton extends Component {

    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
            <button style={{backgroundColor: "#f00"}}
            type="button" 
            // Use props and call back the event
            onClick={this.props.onSubmit_dun}>Cancel</button>
      </div>
    )
  }
}
