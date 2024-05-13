import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import {BrowserRouter as Router, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Singleblog from './components/Singleblog.jsx';
import { ContentCard } from './components/ContentCard.jsx';

const router =createBrowserRouter([
  {  path:'/' ,
  element:<App />,
},
{  path:'blog' ,
element:<ContentCard />,
},
{  path:'/singleblog' ,
element:<Singleblog />,
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
