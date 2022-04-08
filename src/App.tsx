import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import ViewDetails from "./components/ViewDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/viewDetails/:id" element={<ViewDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
