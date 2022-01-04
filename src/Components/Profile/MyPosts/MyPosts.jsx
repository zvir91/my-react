import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';




const MyPosts = (props) => {
     let postsElements =
         props.posts.map( p => <Post message={p.message} like={p.like}  /> );
    
     
     let newPostElement = React.createRef();

     let onAddPost = () => { 
     	props.addPost();
     }
     
     let onPostChange = () => {
     	
     	     let text = newPostElement.current.value;
     	     props.updateNewPostText(text);
     	     

     }

	 return (
		<div className= {s.postBlock}>
	         <h3> my post </h3>
			     <div>
			     <div>
				   <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				   </div>
				   <button onClick={onAddPost}>Add post</button>
			     </div>
			<div className={s.post}>
			{postsElements}
			</div>
		</div>
		)	
}
export default MyPosts;