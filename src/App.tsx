import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/pages/home/HomePage";
import ContactPage from "./components/pages/contact/ContactPage";
import AboutPage from "./components/pages/about/AboutPage";
import ServicesPage from "./components/pages/services/ServicesPage";
import AppointmentPage from "./components/pages/appointment/AppointmentPage";
import { ToastContainer, Zoom } from "react-toastify";
function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div
      className={`flex min-h-screen w-full flex-col ${pathname === "/" ? "bg-secondary" : "bg-custom-light-blue"}`}
    >
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
