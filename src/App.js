import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Analytics from "./components/Analytics/Analytics";
import Newsletter from "./components/Newsletter/Newsletter";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
