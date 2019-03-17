import React, { Component } from 'react'

export default class App extends Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(people => {
      this.setState({
        people
      })
    })
  }

  render() {
   return  <div></div>
  }
}
