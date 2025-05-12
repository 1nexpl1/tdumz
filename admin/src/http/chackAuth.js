// services/userAPI.js
import axios from 'axios'

export const checkAuth = async () => {
  const res = await axios.get('https://api.tdumz.com/api/user/refresh', {
    withCredentials: true // обязательно для httpOnly cookie
  })
  return res.data
}
