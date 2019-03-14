// create your App component here
import React from "react";

class App extends React.Component {
  state = {
    spacePeople: []
  }

  componentDidMount(){
    console.log("mounted")
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(({people}) => this.setState({ spacePeople: people }))
  }


  render() {
    return (
      <div>
        {this.state.spacePeople.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }
}
export default App
