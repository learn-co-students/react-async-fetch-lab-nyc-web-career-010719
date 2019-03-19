import React, { Component, Fragment } from 'react';

export default class App extends Component {
  state = {
    astros: [],
  };

  componentDidMount() {
    this.setState({
      astros: [],
    }, () => {
      fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then(astros => {
        astros.people.forEach(a => {
          this.setState({
            astros: [...this.state.astros, a],
          }/*, () => console.log(this.state.astros) */);
        });
      });
    });
  };

  renderAstros() {
    return this.state.astros.map(a => {
      return (
        <Fragment>
          <h3>{a.name} - {a.craft}</h3>
        </Fragment>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <div>{this.renderAstros()}</div>
      </Fragment>
    );
  };
};
