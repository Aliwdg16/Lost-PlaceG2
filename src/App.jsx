import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentCard } from './components/ContentCard';
// import THÜRINGERHAUS from './Fotosmitbeschreibung/THÜRINGERHAUS';
import { Routes, Route } from 'react-router-dom';
// import Singleblog from './components/Singleblog.jsx';
import Singleblogone from './components/Singleblog1.jsx';

function App() {
  return (
    <div className="bg-[url('https://gratisography.com/wp-content/uploads/2020/06/gratisography-ominous-landscape-free-stock-photo-1170x780.jpg')] bg-no-repeat bg-cover">
      <Header />
      {/* <THÜRINGERHAUS /> */}
      <Routes>
        <Route path='/' element={<ContentCard />} />
        <Route path='/places/:id' element={<Singleblogone />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;