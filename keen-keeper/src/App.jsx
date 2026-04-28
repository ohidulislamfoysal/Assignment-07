import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { KeenProvider } from "./context/KeenContext";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <KeenProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer position="top-right" autoClose={1000} />
      </KeenProvider>
    </Router>
  );
}

export default App;