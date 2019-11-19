import React, { Component } from 'react';
import axios from'axios'

class Comment extends Component{
    constructor(props){
        super(props);
        this.state={
            com:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments?postId"+this.props.postId)
        .then(res=>{this.setState({com:res.data})
   } )
        .catch(function(error){
            console.log(error)
        })
}
render(){
    return(
        <div>
             {
               this.state.com.map(el=>{
                   return(
                       <div>
                           <div>
                           <img src=""/>
                   <p>{el.name}</p>
                   </div>
               <p>{el.body}</p>
                       </div>
                   )
               })
             }
        </div>
    )
}
}
export default Comment