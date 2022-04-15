
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";



let initialState = {
   users: [],
   pageSize:3,
   totalUsersCount: 0,
   currentPage: 1,
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
         return {...state, users: action.users} // взять старых пользовател, сделать копию массива и дописать юзеров которые пришли из экшен
      }
      case SET_CURRENT_PAGE: {
         return{...state, currentPage: action.currentPage}
      }
      case SET_USERS_TOTAL_COUNT: {
         
         return {...state, totalUsersCount: action.count}
      }
      default:{
         return state;
      }
   }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsercountsCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsercountsCount})


export default usersReducer;  