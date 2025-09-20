import axios from "axios"

const CUSTOMER_API_BASE_URL = 'http://localhost:8080/customers';

class CustomerService {
  getAllCustomers() {
    return axios.get(CUSTOMER_API_BASE_URL);
  }

  createCustomer(customer) {
    return axios.post(CUSTOMER_API_BASE_URL, customer);
  }

  getCustomerById(id) {
    return axios.get(`${CUSTOMER_API_BASE_URL}/${id}`);
  }

  updateCustomer(id, customer) {
    return axios.put(`${CUSTOMER_API_BASE_URL}/${id}`, customer);
  }

  deleteCustomer(id) {
    return axios.delete(`${CUSTOMER_API_BASE_URL}/${id}`);
  }

   // Soft delete (DELETE endpoint çağrılır)
  softDeleteCustomer(id) {
      return axios.delete(`${CUSTOMER_API_BASE_URL}/${id}`);
  }

   getDeletedCustomers() {
        return axios.get(`${CUSTOMER_API_BASE_URL}/deleted`);
    }

}

export default new CustomerService();