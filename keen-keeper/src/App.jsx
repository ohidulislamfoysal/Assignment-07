import { useState } from "react";
import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar/>
      <HeroSection></HeroSection>
      <Dashboard></Dashboard>
      <Footer></Footer>
      
    </>
  );
}

export default App;