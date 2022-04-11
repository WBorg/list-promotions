import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import PagesPromotionForm from '../Pages/Promotion/Form/form';
  import PagesPromotionList from '../Pages/Promotion/List/list';

  const Root = () =>{

    return(
        <Router>
            <Routes>
            
                    <Route path="/" element={<PagesPromotionList />} />
                    <Route path="/create" element={<PagesPromotionForm />} />
                    <Route path="/edit/:id" element={<PagesPromotionForm />} />
            </Routes>
        </Router>

    );

  }

  export default Root;


                
                