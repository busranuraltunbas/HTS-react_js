import React, { useEffect, useState } from 'react'
import AnimalService from '../services/AnimalService';
import { Link } from 'react-router-dom'

const ListAnimalComponent = () => {

  const [animals, setAnimals] = useState([])

  useEffect(() => {

    getAllAnimals();
    
  }, [])

  const getAllAnimals = () => {
    AnimalService.getAllAnimals().then((response) => {
      setAnimals(response.data)
      console.log(response.data)
    }).catch( error =>{
      console.log(error);
    })

  }

  const deleteAnimal = (animalId) =>{
    AnimalService.deleteAnimal(animalId).then(() =>{
      getAllAnimals()
    }).catch(error =>{
      console.log(error)
    })
  }


  return (
    <div className='container'>
      <h2 className='text-center'>Hayvanların Listesi</h2>
      <Link to = "/add-animal" className='btn btn-primary bn-2'> Hayvan Ekle </Link>
      <table className='table table-bordered table-striped'>
        <thead>
       
          <th> Hayvan Numarası </th>
          <th> Hayvan Tipi </th>
          <th> Yaşı </th>
          <th> Küpe Numarası </th>
          <th> Satış Numarası </th>
          <th> Kesim Numarası </th>
          <th> Ağırlık </th>
          <th> Fiyat </th>
          <th> Hisse </th>
          <th> Kurban Olabilir mi? </th>
   
        </thead>

        <tbody>
          {
            animals.map(
              animal =>
                <tr key={animal.id}>
                  <td> {animal.id} </td>
                  <td> {animal.type} </td>
                  <td> {animal.age} </td>
                  <td> {animal.earningNumber}</td>
                  <td> {animal.salesNumber} </td>
                  <td> {animal.cutNumber} </td>
                  <td> {animal.weight} </td>
                  <td> {animal.price} </td>
                  <td> {animal.share} </td>
                  <td> {animal.isSale} </td>   


                  <td>
                  <Link className='btn btn-info' to={`/edit-animal/${animal.id}`} > Güncelle </Link>
                  <button className='btn btn-danger' onClick={()=> deleteAnimal(animal.id)}
                    style={{marginLeft : "10px"}}> Sil </button>
                  </td>         

                </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListAnimalComponent



