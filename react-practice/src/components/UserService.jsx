import axios from "axios";
const base_url = 'http://localhost:/6969';

class UserService{
    getUsers(){
        return axios.get(base_url + "/api/get")
    }
}