import React, { useState, useEffect} from 'react'
import CustomerService from '../services/CustomerService'
import { Link } from 'react-router-dom'

const ListCustomerComponent = () => {
    
  const [customers, setCustomers] = useState([])
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleted, setShowDeleted] = useState(false);
  const customersPerPage = 5;

  useEffect(() => {

    //getAllCustomers();
    loadCustomers();
    
  }, [showDeleted])

  const getAllCustomers = () =>{
    CustomerService.getAllCustomers().then((response) =>{
      setCustomers(response.data)     
    }).catch(error => {
      console.log(error);
      alert("Müşteriler alınırken hata oluştu ❌");
    })
  }

  const loadCustomers = () => {
      if (showDeleted) {
        CustomerService.getDeletedCustomers()
          .then((response) => setCustomers(response.data))
          .catch((error) => {
            console.log(error);
            alert("Silinen müşteriler alınırken hata oluştu ❌");
          });
      } else {
        CustomerService.getAllCustomers()
          .then((response) => setCustomers(response.data))
          .catch((error) => {
            console.log(error);
            alert("Müşteriler alınırken hata oluştu ❌");
          });
      }
    };

     // Soft delete 
    const deleteCustomer = (customerId) => {
      if (window.confirm("Bu hayvanı silmek istediğine emin misin?")) {
        CustomerService.softDeleteCustomer(customerId)
          .then(() => {
            getAllCustomers(); // listeyi yenile
          })
          .catch((error) => {
            console.log(error);
            alert("Silme sırasında hata oluştu ❌");
          });
      }
    };



  // Arama
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.firstName.toLowerCase().includes(search.toLowerCase()) ||
      customer.phone_number.toLowerCase().includes(search.toLowerCase())
  );

  // Sayfalama hesaplama
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container'>
      <h2 className='text-center'>
        {showDeleted ? "Silinmiş Müşterilerin Listesi" : "Müşterilerin Listesi"}
      </h2>

      {/* Arama */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Müşteri adı veya telefon no ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Butonlar */}
            <div className="mb-3 d-flex gap-2">
              <Link to="/add-customer" className='btn btn-primary'>
                Müşteri Ekle
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
            <th> Müşteri Numarası </th>
            <th> Müşteri Adı </th>
            <th> Müsteri Soyadı </th>
            <th> Müşteri Telefon Numarası </th>
            <th> Müşteri Adresi </th>
            <th> Durum</th>
        </thead>
        <tbody>
        {currentCustomers.map((customer, index) => (
          <tr key={customer.id}>
            <td>{indexOfFirstCustomer  + index + 1}</td> {/* 1'den başlayan sıra */}            
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.phone_number}</td>
            <td>{customer.address}</td>
            <td>

                    {!showDeleted && (
                      <>
    
                    <Link className="btn btn-info" to={`/edit-customer/${customer.id}`}>
                      Güncelle
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCustomer(customer.id)}
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
      {/* Sayfalama */}
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

export default ListCustomerComponent;
