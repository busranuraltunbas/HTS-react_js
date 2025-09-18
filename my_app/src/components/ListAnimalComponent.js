import React, { useEffect, useState } from 'react'
import AnimalService from '../services/AnimalService'
import { Link } from 'react-router-dom'


const ListAnimalComponent = () => {

  const [animals, setAnimals] = useState([])
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleted, setShowDeleted] = useState(false);
  const animalsPerPage = 5; 

  useEffect(() => {

    loadAnimals();
    
  }, [showDeleted])

  const getAllAnimals = () => {
    AnimalService.getAllAnimals().then((response) => {
      setAnimals(response.data)
      
    }).catch( error =>{
      console.log(error);
      alert("Hayvanlar alınırken hata oluştu ❌");
    })
  }

const loadAnimals = () => {
    if (showDeleted) {
      AnimalService.getDeletedAnimals()
        .then((response) => setAnimals(response.data))
        .catch((error) => {
          console.log(error);
          alert("Silinen hayvanlar alınırken hata oluştu ❌");
        });
    } else {
      AnimalService.getAllAnimals()
        .then((response) => setAnimals(response.data))
        .catch((error) => {
          console.log(error);
          alert("Hayvanlar alınırken hata oluştu ❌");
        });
    }
  };

   // Soft delete 
  const deleteAnimal = (animalId) => {
    if (window.confirm("Bu hayvanı silmek istediğine emin misin?")) {
      AnimalService.softDeleteAnimal(animalId)
        .then(() => {
          getAllAnimals(); // listeyi yenile
        })
        .catch((error) => {
          console.log(error);
          alert("Silme sırasında hata oluştu ❌");
        });
    }
  };


  // Filtreleme
  const filteredAnimals = animals.filter(
    (animal) =>
      animal.type.toLowerCase().includes(search.toLowerCase()) ||
      animal.earningNumber.toLowerCase().includes(search.toLowerCase())
  );

  // Sayfalama hesaplama
  const indexOfLastAnimal = currentPage * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = filteredAnimals.slice(
    indexOfFirstAnimal,
    indexOfLastAnimal
  );
  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className='container'>
     <h2 className='text-center'>
        {showDeleted ? "Silinmiş Hayvanların Listesi" : "Hayvanların Listesi"}
      </h2>

      {/* Arama kutusu */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Hayvan tipi veya küpe numarası ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


           {/* Butonlar */}
      <div className="mb-3 d-flex gap-2">
        <Link to="/add-animal" className='btn btn-primary'>
          Hayvan Ekle
        </Link>
        <button
          className="btn btn-secondary"
          onClick={() => setShowDeleted(!showDeleted)} // ✅ toggle
        >
          {showDeleted ? "Aktifleri Göster" : "Silinenleri Göster"}
        </button>
      </div>
 
        <table className="table table-striped table-hover table-custom">
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
          <th> Durum</th>
        </thead>

        <tbody>
          {currentAnimals.map((animal, index) => (
            <tr key={animal.id}>
              <td>{indexOfFirstAnimal + index + 1}</td> {/* 1'den başlayan sıra */}
              <td>{animal.type}</td>
              <td>{animal.age}</td>
              <td>{animal.earningNumber}</td>
              <td>{animal.salesNumber}</td>
              <td>{animal.cutNumber}</td>
              <td>{animal.weight}</td>
              <td>{animal.price}</td>
              <td>{animal.share}</td>
              <td>{animal.isSale ? "Evet" : "Hayır"}</td>
              <td>

                {!showDeleted && (
                  <>

                <Link className="btn btn-info" to={`/edit-animal/${animal.id}`}>
                  Güncelle
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteAnimal(animal.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Sil
                </button>

                    </>
                )}
                {showDeleted && <span className="text-muted">Silinmiş</span>}

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sayfalama butonları */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default ListAnimalComponent



