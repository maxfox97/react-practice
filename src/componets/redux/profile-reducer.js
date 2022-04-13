const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
      postsData:[
        { id: 1, message: "Hi, Max, What's up ?", likesCount: 3 },
        { id: 2, message: "Hi, Sveta, How are you ?", likesCount: 11 },
        { id: 3, message: "Hi, Nika", likesCount: 4 },
        { id: 3, message: "Hi", likesCount: 32 },
        { id: 3, message: "Yo", likesCount: 12 },
      ],
      newPostText:"It-kamustra.com",
    
}

 const profileReducer = (state = initialState,action ) => {
    switch(action.type){
        case ADD_POST: {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount:21,
          };
          return {
            ...state,
            postsData:[...state.postsData, newPost],
            newPostText: '',
          };
        };
        case UPDATE_NEW_POST_TEXT:{
            return {
              ...state,
              newPostText:action.newText,
            }
        };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT,newText: text})

export default profileReducer