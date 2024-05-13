import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContentCard } from "./components/ContentCard";
import THÜRINGERHAUS from "./Fotosmitbeschreibung/THÜRINGERHAUS";
import {BrowserRouter as Router, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Singleblog from './components/Singleblog.jsx';

function App() {
  return (
    <>
      <Header />   
      <ContentCard />
      <THÜRINGERHAUS />
      <Footer />
    </>
  );
}

export default App;
