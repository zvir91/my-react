import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem  from './DialogsItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'







const Dialogs = (props) => {
   let state = props.dialogsPage;
    
    let messagesElements = state.messages.map( m => <Message message={m.message} />);
    let dialogsElements = state.dialogs.map( d =>  <DialogsItem name={d.name} id={d.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick =  () => {
        props.sendMessage();

    }
    let onNewMessageChange = (e) => {
         let body = e.target.value;
         props.updateNewMessageBody(body);
    }

   
    
return (
      <div className = {s.dialogs}>
      	<div className={s.dialogsItem}>
      	  {
            dialogsElements
          }
      	  </div>

        <div className={s.messages}>
        	
           <div> {messagesElements} </div>

        	
        </div>
          <div>
             <textarea placeholder = "Enter your message"
                       value={newMessageBody}
                       onChange= {onNewMessageChange}>
                        </textarea>
             <button onClick ={onSendMessageClick}> Sent</button>
          </div>
      </div>

		)
}

export default Dialogs;