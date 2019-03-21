
import React, { Component } from 'react'

class App extends Component {

  state = {
      astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ astronauts: people })
    )}

  render() {
    return (
      <div>
        {this.state.astronauts.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

}

export default App
