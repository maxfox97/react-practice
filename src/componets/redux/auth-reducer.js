import { authAPI} from '../../api/api';

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

let initialState = {
   userId: null,
   login: null,
   email: null,
   isAuth: false,
};

const authReducer = (state = initialState, action ) => {
   
   switch(action.type){
      case SET_USER_DATA: 
     
         return {
            ...state,
            ...action.payload,
          }  
        
      default:{
         return state;
      }
   }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_USER_DATA, 
   payload:{userId,email,login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  
  if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
   };

}



export const login = (email,password, rememberMe) =>async (dispatch) => {  //THUNK CREATOR
   const response =  await authAPI.login(email,password, rememberMe);    
   
   if (response.resultCode === 0) {
      dispatch(getAuthUserData())
   }
}


export const logout = () =>async (dispatch) => {  //THUNK CREATOR
  const response =  authAPI.logout();
   
  if (response.resultCode === 0) {
      dispatch(getAuthUserData(null, null, null, false))
   }
}




export default authReducer;  


