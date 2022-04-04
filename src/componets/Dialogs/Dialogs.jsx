import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import React from "react";



const Dialogs = (props) => {

    const dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} url={d.url} />);
    const messagesElements = props.state.messagesData.map(m => <Message id={m.id} message={m.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessage(message);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement} />
                <button onClick={addMessage}>Add Message</button>
            </div>

        </div >
    );
};

export default Dialogs;