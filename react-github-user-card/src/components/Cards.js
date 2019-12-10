import React from "react";

import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,CardImg  } from 'reactstrap';;

const Cards = props => {

    return (
    <div className="Main-Div">
    <Card className="Main-Card">
    <CardHeader><strong>{props.user.name}</strong></CardHeader>
    <CardBody>
    <CardText> <strong>Username:</strong>{` ${props.user.login}`}</CardText>
    <CardText><strong>Portofolio:</strong>{` ${props.user.blog}`}</CardText>
    <CardText><strong>Location:</strong>{` ${props.user.location}`}</CardText>
    <CardImg src={props.user.avatar_url}/>
    </CardBody>
    <CardFooter><strong>About:</strong>{` ${props.user.bio}`}</CardFooter>
   </Card>
 
   <h1>Followers:</h1>
 <div className="Followers-div">
 
  {props.userFollowers.map(item => {
    
    return <div key={item.id} className="followers-Card">
       
        <Card >
    <CardHeader><strong>{`${item.login}`}</strong></CardHeader>
    <CardBody>
    <CardImg src={item.avatar_url}/>
    </CardBody>
<CardFooter></CardFooter>
</Card>
           
    </div>
})}

 </div>

    </div>)


}
export default Cards;
