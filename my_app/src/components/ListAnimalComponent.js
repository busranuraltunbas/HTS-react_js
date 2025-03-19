import React, { useState } from 'react'

const ListAnimalComponent = () => {

  const [animals, setAnimals] = useState([])

  return (
    <div className='container'>
      <h2 className='text-center'>Hayvanların Listesi</h2>
      <table className='table table-bordered table-striped'>
        <thead>

          <th> Hayvan Tipi </th>
          <th> Yaşı </th>
          <th> Küpe Numarası </th>
          <th> Satış Numarası </th>
          <th> Kesim Numarası </th>
          <th> Ağırlık </th>
          <th> Fiyat </th>
          <th> Kişi Sayısı </th>
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

                </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListAnimalComponent



