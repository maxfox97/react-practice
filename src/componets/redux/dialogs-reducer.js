const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
    dialogsData:[
        { id: 1, name: "Dimych", url: "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png" },
        { id: 2, name: "Sveta", url: "https://img.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg" },
        { id: 3, name: "Alex", url: "https://media.istockphoto.com/vectors/single-vector-male-avatar-vector-id495628023" },
        { id: 4, name: "Nick", url: "https://s.pfst.net/2017.06/573451667567ddd2477af4c7d5da84dd1139ec803dbe_b.jpg" },
        { id: 5, name: "Anna", url: "https://media.istockphoto.com/vectors/pretty-girl-avatar-flat-cartoon-style-vector-illustration-vector-id1140166223?k=20&m=1140166223&s=170667a&w=0&h=wgeq7igZ8rP0WrzCBGJL70dLF9bPri1nrMXNerQ6kOA="},
        { id: 6, name: "Oleh", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGtUgLB8IdVBnpDGqfSpvwM_Fl6LOhjwnBw&usqp=CAU" },
      ],
    messagesData:[
        { id: 1, message: "Hi, how are you ?" },
        { id: 2, message: "What's up ?" },
        { id: 3, message: "Yo" },
      ],
    newMessageText:"Enter your Massage",  
}

const dialogsReducer = (state = initialState,action ) => {
    
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
              };
              return {
                ...state, 
                messagesData:[ ...state.messagesData, newMessage],
                newMessageText: '',
              }
           
        case UPDATE_NEW_MESSAGE:
            return {
              ...state,
             newMessageText:action.newText,
            }
        default:     
        return state;
    }

   
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE,newText: text})

export default dialogsReducer;