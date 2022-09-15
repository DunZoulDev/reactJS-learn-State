import React, { Component } from 'react'

export default class App_Ex1  extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div style = {styles.header}>
        <h1>Header name</h1>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div style = {styles.content}>
        <p>content details</p>
      </div>
    )
  }
}

const styles = {
  header: {backgroundColor: '#ff0820', height: 100},
  content: {backgroundColor: '#0000ff', height: 100}
}