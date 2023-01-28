import Navbar from "../src/components/Navbar";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Rentals from "./components/Rentals";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <Rentals />
      <Footer />
    </div>
  );
}

export default App;
