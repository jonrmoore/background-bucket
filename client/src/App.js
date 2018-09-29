import React, { Component } from 'react';
// import logo from './logo.svg'
// import './App.css';
// import "./index.scss";

class App extends Component {

  state = { awards: [] };

  componentDidMount() {
    fetch("http://localhost:3001/awards")
      .then(res => res.json())
      .then(awards => this.setState(state => ({ 
        ...state,
        awards
      })))
    ;
  }

  render() {
    return (
      <div className="App">
        <h1>Awards</h1>
        {this.state.awards.map(award => (
          <div key={award.id}>{ award.title }</div>
        ))}
      </div>
    );
  }
}

export default App;
