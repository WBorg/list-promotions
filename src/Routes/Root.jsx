import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
import PagesPromotionForm from 'Pages/Promotion/Form/form';
// import PagesPromotionList from '../pages/Promotion/List/List';
import PagesPromotionSearch from 'Pages/Promotion/Search/Search';

  const Root = () =>{
    return(
    <Router>
        <Routes>
            {/* <Route path="/" element={<PagesPromotionList />} />               */}
            <Route path="/" element={<PagesPromotionSearch />} />              
            <Route path="/create" element={<PagesPromotionForm />} />
            <Route path="/edit/:id" element={<PagesPromotionForm />} />
        </Routes>
    </Router>
    );
  }

  export default Root;

      