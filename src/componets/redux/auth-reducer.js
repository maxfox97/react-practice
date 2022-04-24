import { authAPI} from '../../api/api';

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
   userid: null,
   login: null,
   email: null,
   isAuth: false,
};

const authReducer = (state = initialState, action ) => {
   
   switch(action.type){
      case SET_USER_DATA: 
     
         return {
            ...state,
            ...action.data,
            isAuth:true
          }  
        
      default:{
         return state;
      }
   }
}

export const setAuthUserData = (userId,email,login) => ({
   type: SET_USER_DATA, 
   data:{userId,email,login}
});


export const getAuthUserDataThunk = () =>{
   return(dispatch) => {
      authAPI.me()
         .then((response) => {
         
         if (response.resultCode === 0) {
            let { userId, login, email } = response.data;
            dispatch(setAuthUserData(userId, login, email));
         }
      });
   }
}

export default authReducer;  


