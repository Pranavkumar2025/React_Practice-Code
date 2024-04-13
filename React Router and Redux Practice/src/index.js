import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux';

import cartStore from './Redux/Store';
import Layout from './Router/Layout';
// import Home from './Router/Home';
import About from './Router/About';
import Service from './Router/Service';
import MyCartStore from './Components/MyCartStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={cartStore}>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service />} />
          <Route path='/cart' element = {<MyCartStore/>}/>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
