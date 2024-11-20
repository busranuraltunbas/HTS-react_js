import axios from "axios"

const CUSTOMER_BASE_REST_API_URL = 'http://localhost:8080/customers';
const CUSTOMER_REST_API_URL = 'http://localhost:8080/customer';
const CUSTOMER_CREATE_BASE_REST_API_URL = 'http://localhost:8080/createCustomer';


class CustomerService{
    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_CREATE_BASE_REST_API_URL,customer);
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_BASE_REST_API_URL + '/'+ customerId);
    }

    updateCustomer(customerId, customer){
        return axios.put(CUSTOMER_REST_API_URL + '/'+ customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_REST_API_URL + '/'+ customerId);
    }
}


export default new CustomerService();