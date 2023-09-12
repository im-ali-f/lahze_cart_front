import axios from 'axios';

const getServices = async () => {
    const response = await axios.get(`https://api.vip4care.ir/addService/getServices`)
    return response.data;
}

export { getServices };