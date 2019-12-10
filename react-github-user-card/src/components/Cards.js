import React from "react";

const Cards = props => {
console.log(props.user)
    return (
    <div>
        <div>
    <h1>{props.user.name}</h1>
 <h2>{`Username: ${props.user.login}`}</h2>
    <h3>{`Portofolio: ${props.user.blog}`}</h3>
 <h4>{`Location: ${props.user.location}`}</h4>
    
<img src={props.user.avatar_url}/>
<h5>{` About: ${props.user.bio}`}</h5>
</div>


    </div>)


}
export default Cards;
