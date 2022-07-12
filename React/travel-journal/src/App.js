import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="app">
      <Navbar />
      {data.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
}

export default App;
