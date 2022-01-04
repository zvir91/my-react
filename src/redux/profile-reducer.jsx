



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
      posts: [
         {id:0, message:"Hi , how are you?",like:12},
         {id:1, message:"It's my first post",like:1},
         {id:2, message:"Really???",like:10},
         {id:3, message:"Really???",like:9},
         {id:4, message:"No, I am layer",like:30},
         {id:5, message:"You are stupid beach but not layer!!!",like:129}
      ],   
       newPostText:"it-kamasutra.com"  
   };


 const profileReducer = (state = initialState, action) => {
 	switch(action.type) {
 	  case 'ADD-POST': {
 	   let newPost = {
        id:6,
        message: state.newPostText,
        like:0
       };
       let stateCopy = {...state};
       stateCopy.posts = {...state.posts};
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
    }
      case 'UPDATE-NEW-POST-TEXT': {
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText;
        return stateCopy;
    }
        default:
            return state;
 	
}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText:text});


export default profileReducer;

