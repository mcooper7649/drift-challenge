import React, { Component } from 'react'
import robo from './robo.svg'
import './App.css'

class App extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err))
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/get_joke')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return console.log(body.joke)
  }

  render() {
    return (
      <div className="App">
        <div className="card text-center">
          <div className="card-header">Drift Presents:</div>
          <img src={robo} className="bot-img card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Joke Bot</h5>
            
            <p className="card-text">
              Beep. Boop. Click To Activate Laughter Protocol
            </p>
            
            <a href="#" name="yes-btn" value="yes" className="drift-open-chat btn btn-info">
              Activate
            </a>
            
            
          </div>
          <div className="card-footer text-muted">A Dynamic Custom Bot</div>
        </div>
        <p className="App-intro">{this.state.data}</p>
      </div>
    )
  }
}

export default App
