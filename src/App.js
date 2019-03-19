import React from 'react';

class App extends React.Component {

  state = {
    people: []
  }


  render() {
    return(
      <div>
      {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(r=>r.json())
    .then(({people}) => 
      this.setState({ people })
    )
  }
}
export default App
