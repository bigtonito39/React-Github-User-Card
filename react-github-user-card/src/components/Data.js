import React, { useEffect } from "react";
import axios from "axios"
import Cards from "./Cards"

class Data extends React.Component{
   constructor(){
       super();
       this.state= {
           user:{},
           userFollowers:[]
       }
   }
 componentDidMount(){
    
        axios.get(`https://api.github.com/users/bigtonito39`)
        .then(response => {
            this.setState({...this.state, user: response.data})
        })
       .catch(error =>{
           console.log(`this is an ${error}`)
       })
       axios.get('https://api.github.com/users/Iyehvah/followers')
       .then(response => {
           this.setState({...this.state, userFollowers:response.data})
       })
       .catch (error => {
        console.log(`this is an ${error}`)

     })
   

}

render(){
      return (
    <div>        
        <Cards user={this.state.user} userFollowers={this.state.userFollowers} />
        </div>)
}
  

}
export default Data;