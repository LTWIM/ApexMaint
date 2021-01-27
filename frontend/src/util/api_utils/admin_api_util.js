import axios from 'axios'
export const registerUser = (adminData) => {
  return axios.post('/api/admins/sign-up', adminData)
}

