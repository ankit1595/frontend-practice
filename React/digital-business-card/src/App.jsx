import logo from "./logo.svg";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="card-container">
        <Info />
        <About />
        <Interests />
        <Footer />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    </div>
  );
}

export default App;
