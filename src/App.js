import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Analytics from "./components/Analytics/Analytics";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
