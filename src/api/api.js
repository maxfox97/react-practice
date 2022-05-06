import  axios from "axios";


const instance =  axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': "2f8afba6-1fae-4a32-bacf-21a5cd132bdf",
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI =  {
    getUsers(currentPage = 1, pageSize = 10) {
        
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
     })
    },
    unFollowUser(userId) { 
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI =  {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`,{
            status: status,
        });
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)},
    login(email,password,rememberMe = false) {
        return instance.post(`auth/login`,{email,password,rememberMe})},
    logout() {
        return instance.delete(`auth/login`)},

}