import React, { useState, useEffect} from 'react'
import CustomerService from '../services/CustomerService'
import { Link } from 'react-router-dom'

const ListCustomerComponent = () => {
    
  const [customers, setCustomers] = useState([])
  
  useEffect(() => {

    getAllCustomers();
    
  }, [])

  const getAllCustomers = () =>{
    CustomerService.getAllCustomers().then((response) =>{
      setCustomers(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteCustomer = (customerId) =>{
    CustomerService.deleteCustomer(customerId).then((response) => {
      getAllCustomers();
    
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Müşterilerin Listesi</h2>
      <Link to = "/add-customer" className='btn btn-primary bn-2'> Müşteri Ekle </Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <th> Müşteri Numarası </th>
            <th> Müşteri Adı </th>
            <th> Müsteri Soyadı </th>
            <th> Müşteri Telefon Numarası </th>
            <th> Müşteri Adresi </th>
            <th> Durum</th>
        </thead>
        <tbody>
       {customers.map(customer => (
        <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.phone_number}</td>
            <td>{customer.address}</td>
            <td>
              <Link className='btn btn-info' to={`/edit-customer/${customer.id}`} > Güncelle </Link>
              <button className='btn btn-danger' onClick={()=> deleteCustomer(customer.id)}
                style={{marginLeft : "10px"}}> Sil </button>
            </td>
        </tr>
    ))}        
        </tbody>

      </table>
    </div>
  )
}

export default ListCustomerComponent
