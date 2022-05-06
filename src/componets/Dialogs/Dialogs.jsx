import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import React from "react";
import { useForm } from 'react-hook-form';


const Dialogs = (props) => {

    const dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} url={d.url} />);
    const messagesElements = props.messagesPage.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <MessageForm addMessage={props.addMessage} onMessageChange={props.onMessageChange} />
            </div>
        </div >
    );
};


const MessageForm = (props) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(data);
        props.addMessage(data.messageText)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="MessageText">
                <span>Message:</span>
                <br />
                <textarea type="text" placeholder="Enter your Message"
                    {...register('messageText', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        }
                    })}
                />
            </label>
            <div style={{ height: 40 }}>
                {errors?.messageText && <p>{errors?.messageText?.message || 'Error!'}</p>}
            </div>
            <input type="submit" disabled={!isValid} />
        </form>
    )
}


export default Dialogs;