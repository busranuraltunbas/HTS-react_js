import './App.css';
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
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
        <HeaderComponent/>
        <div className='container'>
          <Routes>

          <Route exact path='/animal' element={<ListAnimalComponent/>}> </Route>


          
            <Route exact path='/' element={<ListCustomerComponent/>}> </Route>
            <Route path='/customers' element={<ListCustomerComponent/>}> </Route>
            <Route path='/add-customer' element={<AddCustomerComponent/>}> </Route>
            <Route path='/edit-customer/:id' element={<AddCustomerComponent/>}> </Route>

            <Route path='/add-animal' element={<AddAnimalComponent/>}> </Route>

          </Routes>
        </div>
        <FooterComponent/>
      </Router>
     
    </div>
  );
}

export default App;
