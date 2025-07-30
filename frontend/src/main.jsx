import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/index.css'; 
import './css/style.css'
import './css/footer.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
