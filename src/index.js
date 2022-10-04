import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App';
import News from './components/props';
import NewsList from './components/dropdown';
import Pay from './components/hooks';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <App1 />
          <News name="Daily Monitor" citizens="Kenyans" />
          <NewsList />
          <News name="Monday Monitor" citizens="Ugandans" />
          <NewsList />
          <Pay />
  </React.StrictMode>
)
