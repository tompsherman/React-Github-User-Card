import React from 'react'
import axios from "axios"
import './App.css'
import UserCard from "./components/UserCard"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userData: [],
      followers: []
    }
  }
  componentDidMount(){
    axios  
      .get("https://api.github.com/users/tompsherman")
      .then(response => this.setState({userData: response.data}))
      .catch(err=>console.log("error getting USERDATA"))
      
    axios
      .get("https://api.github.com/users/tompsherman/followers")
      .then(response =>  this.setState({followers: response.data}))
      .catch(err=>console.log("ERROR getting followers"))
  }

  getUser = () => {

  }
  
  render(){
    console.log("render", this.state)
    return (
      <div className="App">
        <h1>these are my user cards:</h1>
        <UserCard userInfo={this.state.userData} followers={this.state.followers}/>
      </div>
     )
  }
}

export default App