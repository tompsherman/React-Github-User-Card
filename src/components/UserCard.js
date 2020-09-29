import React from "react"

const UserCard = (props) => {
   console.log()
   
   return(
        <div> 
            {/* {props.userInfo.map(info=>(
                <div>
                    <img src={info.image} alt={info.name} />
                    <h2>{info.name}</h2>
                </div>
            ))}
             */}
            < img src={props.userInfo.avatar_url} alt="{props.userInfo.avatar_url}"/>
            <h2>{props.userInfo.name}</h2>
            <h3>{props.userInfo.login}</h3>
            <h3>{props.userInfo.html_url}</h3>
            <h2></h2>
            <h2>{props.userInfo.name}</h2>
            
        </div>
    )
}

export default UserCard