import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import axios from 'axios'

class App extends Component {


  componentDidMount() {
    this.getTitles()
  }

  getTitles = () => {
    const title = "rush hour"
    axios.get(`/api/titles`, {
      params: {
        searchBy: "TitleName",
        searchInput: "Amadeus (Part 1)"
      }
    }).then((res) => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
