import { usersAPI } from "../../api/api";
import { updateObejectInArray } from "../../utilites/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLLOWING_PROGRESS = "TOGGLE_IS_FOLLLOWING_PROGRESS";



let initialState = {
   users: [],
   pageSize:10,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
 
};

const usersReducer = (state = initialState,action ) => {
 
   switch(action.type){
      case FOLLOW: {
         return {
            ...state,
            users: updateObejectInArray(state.users, action.userId, 'id', {followed: true} )
          }  
        
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: updateObejectInArray(state.users, action.userId, 'id', {followed: false} )
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
      case TOGGLE_IS_FETCHING: {
         
         return {...state, isFetching: action.isFetching}
      }
      case TOGGLE_IS_FOLLLOWING_PROGRESS: {
         
         return {
            ...state, 
            followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id != action.userId)
         }
      }
      default:{
         return state;
      }
   }
}

export const follow = (userId) => ({type: FOLLOW, userId}); //ACTION CREATORS
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount})
export const toggleIsFecthing = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLLOWING_PROGRESS, isFetching, userId})



export const getRequestUsers = (requestPage,pageSize ) => {
  
   return async (dispatch) =>{
  
      dispatch(toggleIsFecthing(true));
      dispatch(setCurrentPage(requestPage));

      let data = await usersAPI.getUsers(requestPage, pageSize)
         dispatch(toggleIsFecthing(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
   }
}


const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
   dispatch(toggleFollowingProgress(true, userId));
      
   const response = await apiMethod(userId);
      if (response.resultCode === 0) {
         dispatch(actionCreator(userId));
      }
      dispatch(toggleFollowingProgress(false,userId));
};


export const followThunk = (userId) => {
   return async (dispatch) =>{
      followUnfollowFlow(dispatch,userId,usersAPI.followUser.bind(usersAPI),follow);
   }
}

export const unFollowThunk = (userId) => {
   return async(dispatch ) =>{
      followUnfollowFlow(dispatch,userId,usersAPI.unFollowUser.bind(usersAPI),unfollow);
   }
}

export default usersReducer;  


