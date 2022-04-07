import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action);
    }

    let onMessageChange = (message) => {
        let action = updateNewMessageActionCreator(message)
        props.store.dispatch(action);
    }

    return (
        <Dialogs
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            messagesPage={state.messagesPage}
            newMessageText={state.messagesPage.newMessageText}
        />
    );
};

export default DialogsContainer;