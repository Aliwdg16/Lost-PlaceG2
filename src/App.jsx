import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Header />
      <div className="">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
