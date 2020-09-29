import React from 'react'
import axios from "axios"
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userData: []
    }
  }
  componentDidMount(){
    axios  
      .get("https://api.github.com/users/tompsherman")
      .then(response => this.setState({userData: response.data}))
      .catch(err=>console.log("error in .get"))
      
  }
  
  render(){
    console.log(this.state)
    return (
      <div className="App">
        <h1>these are my user cards:</h1>
      </div>
     )
  }
}

export default App