 const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
 const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
      messages: [
         {id:1, message:"Hello whats up?"},
         {id:2, message:"I`m fine nigga?"},
         {id:3, message:"She is not nigga"},
         {id:4, message:"Why are call Natalia Nigga?"},
         {id:5, message:"Are you stupid or what?"}
      ],
      dialogs: [
         {id:1, name:"Natalya"},
         {id:2, name:"Vitalik"},
         {id:3, name:"Jana"},
         {id:4, name:"Katia"},
         {id:5, name:"Elvira Popivna"}
      ],
      newMessageBody:""
    };

 const dialogsReducer = (state = initialState, action) => {
    
    let stateCopy = {
        ...state,
        messages: [...state.messages]
    };

    switch(action.type) {
      case 'UPDATE-NEW-MESSAGE-BODY': 
    	  state.newMessageBody = action.body;
    	  return state;
      case 'SEND-MESSAGE': 
    	  let body = state.newMessageBody;
          state.newMessageBody = '' ;
          state.messages.push({id:6,message:body});
          return state;
      default:
          return state;
    }   

} 
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export  const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY,body: body}) 

export default dialogsReducer;