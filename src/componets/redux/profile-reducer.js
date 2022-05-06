import { profileAPI, usersAPI } from '../../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
      postsData:[
        { id: 1, message: "Hi, Max, What's up ?", likesCount: 3 },
        { id: 2, message: "Hi, Sveta, How are you ?", likesCount: 11 },
        { id: 3, message: "Hi, Nika", likesCount: 4 },
        { id: 3, message: "Hi", likesCount: 32 },
        { id: 3, message: "Yo", likesCount: 12 },
      ],
      profile: null,
      status:'',
    
}

 const profileReducer = (state = initialState,action ) => {
    
    switch(action.type){
        case ADD_POST: {
        
          let newPost = {
            id: 5,
            message: action.text,
            likesCount:21,
          };
          return {
            ...state,
            postsData:[...state.postsData, newPost],
            newPostText: '',
          };
        };
        
        case SET_USER_PROFILE: {
         
          return {
            ...state, 
            profile: action.profile,
          }
        }
        case SET_STATUS: {
          return {
            ...state,
            status: action.status,
          }
        }
        default:
            return state;
    }
}


export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const setStatus = (status) =>({type: SET_STATUS, status});

export const addPostActionCreator = (text) => ({ type: ADD_POST, text })





export const setUserProfileThunk = (userId) => (dispatch) => {  // IT'S THUNK
    usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    });
  }

export const getStatus = (userId) => (dispatch) => {  // IT'S THUNK
    profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
}  
  
export const updateStatus = (status) => (dispatch) => {  // IT'S THUNK
  profileAPI.updateStatus(status)
  .then(response => {
    if(response.data.resultCode === 0){
    dispatch(setStatus(status));
    }
  });
} 



export default profileReducer