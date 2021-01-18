import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Trial from "./components/Trial";
import Classes from "./components/Classes";
import Training from "./components/Training";
import Staff from "./components/Staff";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Home />
          <Trial />
          <Classes />
          <Training />
          <Staff />
          <ContactUs />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
