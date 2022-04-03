import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";




const Dialogs = (props) => {

    // const dialogsData = [
    //     { id: 1, name: "Dimych" },
    //     { id: 2, name: "Sveta" },
    //     { id: 3, name: "Alex" },
    //     { id: 4, name: "Nick" },
    //     { id: 5, name: "Anna" },
    //     { id: 6, name: "Oleh" },
    // ];

    // const messagesData = [
    //     { id: 1, message: "Hi, how are you ?" },
    //     { id: 2, message: "What's up ?" },
    //     { id: 3, message: "Yo" },
    // ];

    const dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} url={d.url} />);
    const messagesElements = props.state.messagesData.map(m => <Message id={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div >
    );
};

export default Dialogs;