import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import { Provider } from 'react-redux';
// import store from './store';

import Landing from './pages/landing/landing';
import Bookmark from "./pages/bookmark/bookmark";
import Navbar from './component/navbar/navbar';
import Loader from "./component/loader/loader";

function App() {
  return (
    <div className="App">
       {/* <Provider store={store}> */}
       <Suspense fallback={<Loader />}>
      <BrowserRouter>
    <Navbar/>
       <Routes>    
            <Route path="/" element={<Landing />} />
            <Route path="/bookmark" element={<Bookmark />} />
            
            
      </Routes>
      </BrowserRouter>
      </Suspense>
      {/* </Provider> */}
    </div>
  );
}

export default App;
