// create your App component here
import React from 'react'
import uuid from 'uuid'

export default class App extends React.Component {
  state = {
    people: []
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, id) => <p key={id}>{person.name}</p>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ people }))

  }

}
