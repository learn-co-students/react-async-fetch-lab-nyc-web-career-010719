import React, {Component} from 'react'

class App extends Component{
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())

  }

  render(){
    return(
      <div></div>
    )
  }
}
export default App
