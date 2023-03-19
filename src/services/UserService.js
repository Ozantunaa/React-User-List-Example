import axios from 'axios'
import { USER_API_LINK } from '../constants'

export const getUsers = () => {
    return axios.get(USER_API_LINK)
}