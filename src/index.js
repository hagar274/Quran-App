import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ReadQuran from './pages/Read-Quran/Index';
import reportWebVitals from './reportWebVitals';
import Layouts from './pages/Layouts/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layouts />
  </React.StrictMode>
);

reportWebVitals();
