import React, { useState, useEffect} from 'react'
import CustomerService from '../services/CustomerService'
import { Link } from 'react-router-dom'

const ListCustomerComponent = () => {
    
  const [customers, setCustomers] = useState([])
  
  useEffect(() => {

    CustomerService.getAllCustomers().then((response) =>{
      setCustomers(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className='container'>
      <h2 className='text-center'>List Customers</h2>
      <Link to = "/add-customer" className='btn btn-primary bn-2'> Müşteri Ekle </Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <th> Customer Id </th>
            <th> Customer First Name </th>
            <th> Customer Last Name </th>
            <th> Customer Phone Number </th>
            <th> Customer Address </th>
        </thead>
        <tbody>
       {customers.map(customer => (
        <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.phone_number}</td>
            <td>{customer.address}</td>
        </tr>
    ))}        
        </tbody>

      </table>
    </div>
  )
}

export default ListCustomerComponent
