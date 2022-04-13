
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";



let initialState = {
   users: []
};

const usersReducer = (state = initialState,action ) => {
 
 
   switch(action.type){
      case FOLLOW: {
        
         return {
            ...state,
            users: state.users.map(u => {   //map users
               if(u.id === action.userId){          //useriD 
                  return {...u, followed: true,}     // change copy user
               }
               return u
            })
          }  
        
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {   //map users
               if(u.id === action.userId){          //useriD 
                  return {...u, followed: false,}     // change copy user
               }
               return u
            })
         }
      }
      case SET_USERS: {
         return {
            ...state,
            users:[...state.users, ...action.users] // взять старых пользовател, сделать копию массива и дописать юзеров которые пришли из экшен
         }
      }
      default:{
         return state;
      }
   }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;  