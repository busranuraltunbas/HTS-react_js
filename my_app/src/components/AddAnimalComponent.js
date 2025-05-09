import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import AnimalService from '../services/AnimalService';

const AddAnimalComponent = () => {

    const [type, setType] = useState("")
    const [age, setAge] = useState("")
    const [earningNumber, setEarningNumber] = useState("")
    const [salesNumber, setSalesNumber] = useState("")
    const [cutNumber, setCutNumber] = useState("")
    const [weight, setWeight] = useState("")
    const [price, setPrice] = useState("")
    const [share, setShare] = useState("")
    //const [isSale, setIsSale] = useState("")
    const navigate = useNavigate();
    const {id} = useParams();

      const [
        isSale,
        setIsSale,
    ] = useState("option1");

    const onOptionChange = (e) => {
      setIsSale(e.target.value)
    };
    
    /*const handleRadioChange = (
        value
    ) => {
      setIsSale(value);
    };*/

    const saveOrUpdateCustomer = (e) =>{
          e.preventDefault();
        
            const animal = {type, age, earningNumber, salesNumber, cutNumber, weight, price, share, isSale }
            if(id){
                AnimalService.updateAnimal(id, animal).then((response) =>{
                  navigate('/animals')
                }).catch(error =>{
                  console.log(error)
                })
            }else{
        
                AnimalService.createAnimal(animal).then((response) => {
                console.log(response.data)
                navigate('/animals')
              }).catch(error =>{
                console.log(error)
              })
            }
    }


    useEffect(() => {
     
        AnimalService.getAnimalById(id).then((response) =>{
            setType(response.data.type)           
            setEarningNumber(response.data.earningNumber)
            setSalesNumber(response.data.salesNumber)
            setCutNumber(response.data.cutNumber)
            setAge(response.data.age)
            setIsSale(response.data.isSale)            
            setPrice(response.data.price)
            setWeight(response.data.weight)
            setShare(response.data.share)
               
            
        }).catch( error => {
          console.log(error);
        })
      }, [])


    const title = () => {
        if(id){
          return <h2 className='text-center'> Hayvan Bilgileri Güncelleme </h2>
        } else{
          return <h2 className='text-center'> Hayvan Bilgileri Ekle </h2>
        }
    }

    return (
           <div>
             <br></br>
             <div className='container'>
               <div className='row'>
                 <div className='card col-md-6 offset-md-3 offset-md-3'>
                   {
                     title()
                   }
                     <div className='card-body'>
                       <form>
                         <div className='form-group mb-2'>
                           <label className='form-label'> Hayvan Tipi </label>
                           <input
                             type='text'
                             placeholder='Hayvan Tipi Giriniz'
                             name='type'
                             className='form-control'
                             value={type}
                             onChange={(e)=> setType(e.target.value)}
                           >                   
                           </input>
                         </div>

                         <div className='form-group mb-2'>
                           <label className='form-label'> Yaşı </label>
                           <input
                             type='text'
                             placeholder='Yaşı Giriniz'
                             name='age'
                             className='form-control'
                             value={age}
                             onChange={(e)=> setAge(e.target.value)}
                           >                   
                           </input>
                         </div>

       
                         <div className='form-group mb-2'>
                           <label className='form-label'> Küpe Numarası </label>
                           <input
                             type='text'
                             placeholder='Küpe Numarası Giriniz'
                             name='earningNumber'
                             className='form-control'
                             value={earningNumber}
                             onChange={(e)=> setEarningNumber(e.target.value)}
                           >                   
                           </input>
                         </div>
       
                         <div className='form-group mb-2'>
                           <label className='form-label'> Satış Numarası </label>
                           <input
                             type='text'
                             placeholder='Satış Numarası Giriniz'
                             name='salesNumber'
                             className='form-control'
                             value={salesNumber}
                             onChange={(e)=> setSalesNumber(e.target.value)}
                           >                   
                           </input>
                         </div>
       
                         <div className='form-group mb-2'>
                           <label className='form-label'> Kesim Numarası </label>
                           <input
                             type='text'
                             placeholder='Kesim Numarası Giriniz'
                             name='cutNumber'
                             className='form-control'
                             value={cutNumber}
                             onChange={(e)=> setCutNumber(e.target.value)}
                           >                   
                           </input>
                        </div>

                        <div className='form-group mb-2'>
                           <label className='form-label'> Ağırlık </label>
                           <input
                             type='text'
                             placeholder='Ağırlık Giriniz'
                             name='weight'
                             className='form-control'
                             value={weight}
                             onChange={(e)=> setWeight(e.target.value)}
                           >                   
                           </input>
                         </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Fiyat </label>
                            <input
                            type='text'
                            placeholder='Fiyat Giriniz'
                            name='price'
                            className='form-control'
                            value={price}
                            onChange={(e)=> setPrice(e.target.value)}
                            >                   
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Hisse </label>
                            <input
                            type='text'
                            placeholder='Hisse Giriniz'
                            name='share'
                            className='form-control'
                            value={share}
                            onChange={(e)=> setShare(e.target.value)}
                            >                   
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Kurban Olabilir mi? </label>
                            <br></br>


                          <input
                          
                          type="radio"
                          id="option1"
                          value="Evet"
                          checked={
                            isSale ===
                              "Evet"
                          }
                          onChange={(onOptionChange)}
                          ></input>

                          <label
                              htmlFor="option1"                          
                          >
                            EVET
                          </label>


                          <input
                            type="radio"
                            id="option2"
                            value="Hayır"
                            checked={
                              isSale ===
                                "Hayır"
                            }
                            onChange={(onOptionChange)}

                            >                   
                            </input>

                            <label
                              htmlFor="option2"                          
                            >
                              HAYIR
                            </label>
                            
                        </div>

                       
                       
                       <button className='btn btn-success' onClick={(e) => saveOrUpdateCustomer(e)}> Kaydet </button>
                       <Link to= '/animals' className='btn btn-danger'> Çıkış</Link>
                       </form>
                     </div>
                 </div>
               </div>
             </div>
       
           </div>
    )
}

export default AddAnimalComponent
