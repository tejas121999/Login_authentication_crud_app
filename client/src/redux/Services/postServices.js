import axios from "axios";
import { BASE_URL } from '../../utils/utils'

function userServices() {
    // get all user
    this.getUser = async () => await axios.get(BASE_URL + '/')

    // delete user
    this.deleteUser = async _id => await axios.delete(BASE_URL + `/delete/${_id}`)

    // create user
    this.addUser = async user => await axios.post(BASE_URL + '/add', user)

    // get user by id 
    this.getUserById = async (_id) => await axios.get(BASE_URL + `/detail/${_id}`)

    // update user by id
    this.updateUser = async (_id, user) => await axios.put(BASE_URL + `/update/${_id}`, user)
}

export default new userServices();