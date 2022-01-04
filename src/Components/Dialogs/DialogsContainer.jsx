import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem  from './DialogsItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from "react-redux";



let mapStateToProps = (state) => {
      return {
          dialogsPage: state.dialogsPage

      }
}

let mapDispatchToProps = (dispatch) => {
     return {
          updateNewMessageBody : ()=> {
               dispatch(sendMessageCreator());
          }, 
          sendMessage : (body)=> {
               dispatch(updateNewMessageBodyCreator(body));
          }
     }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;