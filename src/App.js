import React from 'react'
import axios from "axios"
import './App.css'
import UserCard from "./components/UserCard"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userData: [],
      followers: [],
      username: "tompsherman"
    }
  }
  componentDidMount(){
   this.getUser(this.state.username)
    axios
      .get(`https://api.github.com/users/${this.username}/followers`)
      .then(response =>  this.setState({followers: response.data}))
      .catch(err=>console.log("ERROR getting followers"))
  }

  getUser = (username) => {
    axios  
    .get(`https://api.github.com/users/${username}`)
    .then(response => this.setState({userData: response.data}))
    .catch(err=>console.log("error getting USERDATA"))
    
  }

  changehandler = (e) => {
    this.setState({ username: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.getUser(this.state.username)
  }
  
  render(){
    console.log("render", this.state)
    return (
      <div className="App">
        <h1>This is {this.state.userData.name}'s user card:</h1>
        <form onSubmit={this.submitHandler}>
          <input name="username" type="text" placeholder="enter github username" value={this.state.username} onChange={this.changeHandler}/>
          <button>show me the goods!</button>
        </form>
        <br></br>
        <UserCard userInfo={this.state.userData} followers={this.state.followers}/>
      </div>
     )
  }
}

export default App