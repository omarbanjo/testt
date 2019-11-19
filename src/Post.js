import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'



class Post extends Component {
constructor(props) {
super(props)
this.state = {
posts : []
}
}

componentDidMount() {
axios.get("https://jsonplaceholder.typicode.com/posts?userId" + this.props.id)
.then(res => {this.setState({posts: res.data})
})
.catch(function(error) {

console.log(error)
})

}

render() {
return (

<div className="post-list">
{
this.state.posts.map((el) => {
return (
   <div className="post">
      <p>{el.title}</p>
<p>{el.body}</p>
<img src=""/>
<p>{el.body}</p>
<Link id='link' to={`/Comment/${el.id}`}><button>Show Comment</button> </Link>

</div>)})}

)
})
}
</div>
)
}
}
export default Post