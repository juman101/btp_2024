import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes,Route } from 'react-router-dom'; // Import Routes along with BrowserRouter
import Layout from './Layout';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          {/* Define a route for the Delhi page */}
          <Route path="/" element={<App />} />
          <Route path="/locationpg/delhi" element={<Layout />} />
          <Route path="/locationpg/guwahati" element={<Layout />} />
          <Route path="/locationpg/bangalore" element={<Layout />} />
          <Route path="/locationpg/mumbai" element={<Layout />} />
          {/* Other routes for your application */}
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
