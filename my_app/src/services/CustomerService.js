import axios from "axios"

const CUSTOMER_BASE_REST_API_URL = 'http://localhost:8080/customers';
const CUSTOMER_CREATE_BASE_REST_API_URL = 'http://localhost:8080/createCustomer';


class CustomerService{
    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL)
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_CREATE_BASE_REST_API_URL,customer)
    }
}


export default new CustomerService();