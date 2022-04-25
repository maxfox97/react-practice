
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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



//let AuthRedirectComponent = withAuthRedirect(Dialogs);
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

window.store = store;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);