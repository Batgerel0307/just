import React from 'react'; // React 17-с хойш шаардлагагүй ч импорт хийж болно
import ReactDOM from 'react-dom/client'; // ReactDOM-г ингэж импортлодог React 18-с хойш
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
