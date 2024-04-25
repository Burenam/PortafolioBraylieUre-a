import axios from "axios";


export default axios.create({
    baseURL:'https://componentes-api.azurewebsites.net/api',
    headers: {
        "Content-type": "application/json"
    }
});