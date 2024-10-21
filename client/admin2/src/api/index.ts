import axios from "axios";

const baseURL = "http://localhost:5001";

const axiosPrivate= axios.create({
    baseURL,
    headers:{
        "Content-Type": "application/json",
    }
})

export default axiosPrivate

