import React ,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const url='https://jsonplaceholder.typicode.com/users'

class Users extends Component {
  constructor(props){
    super(props)
    this.state ={
      users:[]
      
    }
  }

   componentDidMount() {
    axios.get(url)
    .then(res=>{
      console.log('res:',res)
      this.setState({
        users:res.data
      })
    })
    .catch(err=>{
      console.log('un erreur  produit')
    })
  }
  
  render() { 
    return (  

       <div className="users-list">
        {

         this.state.users.map(el=>{
            return (
            <div className="user-list">
              
            <div className="image"><img className="user-image" src="https://previews.123rf.com/images/lynxtime/lynxtime1610/lynxtime161000325/64389759-human-male-avatar-male-avatar-flat-male-avatar-icon-male-avatar-web-male-avatar-illustration-male-av.jpg"/></div>
              
            <div className="user-name">{el.name}</div>
            <p className="phone-user">{el.phone}</p>
              <Link id='link' to={`/Post/${el.id}`}><button className="butt">Follow Me</button></Link>
            
              </div>
            )
         })
        
        }
        

       </div>

    );
  }
}
 
export default Users;