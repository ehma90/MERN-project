import axios from 'axios'

const API_URL = 'api/users'
const API_URL_LOGIN ='api/users/login'

//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// LogIn user
const logIn = async(userData) => {
    const res = await axios.post(API_URL_LOGIN, userData)

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

// Logout user
const logout = () => localStorage.removeItem('user')


const authService = {
    register,
    logout,
    logIn
}

export default authService