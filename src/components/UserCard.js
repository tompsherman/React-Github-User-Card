import React from "react"

const UserCard = (props) => {
   console.log()
   
   return(
        <div> 
            
            < img src={props.userInfo.avatar_url} alt="{props.userInfo.avatar_url}"/>
            <h2>{props.userInfo.name}</h2>
            <h3>{props.userInfo.login}</h3>
            <h3>{props.userInfo.html_url}</h3>
            <h3>followers:</h3>
            {props.followers.map(person=>(
                <div>
                    <h4>{person.login}</h4>
                </div>
            ))}
            
        </div>
    )
}

export default UserCard