
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../redux/dialogs-reducer";
import store from "../redux/store";
import Dialogs from "./Dialogs";




let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action);
        },
        onMessageChange: (message) => {
            let action = updateNewMessageActionCreator(message)
            dispatch(action);
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

window.store = store;

export default DialogsContainer;