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
    }
}



export const userUnFollow =  {
    unFollow(userId) {   
        return instance.delete(`follow/${userId}`)
         .then(response => {
           return response.data
     })
    }
}


export const userFollow =  {
    follow(userId) {
        return instance.post(`follow/${userId}`)
         .then(response => {
            return response.data
     })
    }
}