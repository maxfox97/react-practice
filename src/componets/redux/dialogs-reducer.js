const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";


export const dialogsReducer = (state,action ) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
              } 
             state.messagesData.push(newMessage);
             state.newMessageText = '';
             return state;
        case UPDATE_NEW_MESSAGE:
             state.newMessageText = action.newText;
             return state;
        default:     
        return state;
    }

   
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE,newText: text})

export default dialogsReducer;