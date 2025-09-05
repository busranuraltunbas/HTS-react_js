import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import AddCustomerComponent from './components/AddCustomerComponent';
import ListAnimalComponent from './components/ListAnimalComponent';
import AddAnimalComponent from './components/AddAnimalComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element={<ListCustomerComponent />} />
            <Route path='/customers' element={<ListCustomerComponent />} />
            <Route path='/add-customer' element={<AddCustomerComponent />} />
            <Route path='/edit-customer/:id' element={<AddCustomerComponent />} />

            <Route path='/animals' element={<ListAnimalComponent />} />
            <Route path='/add-animal' element={<AddAnimalComponent />} />
            <Route path='/edit-animal/:id' element={<AddAnimalComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;