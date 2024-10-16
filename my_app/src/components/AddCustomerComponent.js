import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import CustomerService from '../services/CustomerService'

const AddCustomerComponent = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone_number, setPhoneNum] = useState("")
  const [address, setAddress] = useState("")
  const navigate = useNavigate();
  


  const saveCustomer = (e) =>{
    e.preventDefault();

    const customer = {firstName, lastName, phone_number, address}
    console.log(customer);
    CustomerService.createCustomer(customer).then((response) => {
      console.log(response.data)
      navigate('/customers')
    }).catch(error =>{
      console.log(error)
    })
  }


  return (
    <div>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'> Müşteri Ekle </h2>
              <div className='card-body'>
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label'> İsim </label>
                    <input
                      type='text'
                      placeholder='İsim Giriniz'
                      name='firstName'
                      className='form-control'
                      value={firstName}
                      onChange={(e)=> setFirstName(e.target.value)}
                    >                   
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'> Soyisim </label>
                    <input
                      type='text'
                      placeholder='Soyisim Giriniz'
                      name='lastName'
                      className='form-control'
                      value={lastName}
                      onChange={(e)=> setLastName(e.target.value)}
                    >                   
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'> Telefon Numarası </label>
                    <input
                      type='text'
                      placeholder='Telefon Numarası Giriniz'
                      name='phone_number'
                      className='form-control'
                      value={phone_number}
                      onChange={(e)=> setPhoneNum(e.target.value)}
                    >                   
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'> Adres </label>
                    <input
                      type='text'
                      placeholder='Adres Giriniz'
                      name='address'
                      className='form-control'
                      value={address}
                      onChange={(e)=> setAddress(e.target.value)}
                    >                   
                    </input>
                  </div>
                
                <button className='btn btn-success' onClick={(e) => saveCustomer(e)}> Kaydet </button>
                <Link to= '/customers' className='btn btn-danger'> Çıkış</Link>
                </form>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddCustomerComponent
