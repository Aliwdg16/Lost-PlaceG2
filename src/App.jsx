import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContentCard } from "./components/ContentCard";

import { Routes, Route } from "react-router-dom";
import Singleblog from "./components/Singleblog.jsx";

function App() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: 'url("./src/assets/Asphalt2.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundColor: "#3D3449",
        }}
      >
        <Header />
        {/* <THÜRINGERHAUS /> */}
        <Routes>
          <Route path="/" element={<ContentCard />} />
          <Route path="/places/:id" element={<Singleblog />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
