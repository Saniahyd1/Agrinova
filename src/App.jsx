import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import SearchResults from "./pages/SearchResults.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
  <Route
    path="/"
    element={
      <div className="p-10 text-center text-2xl font-semibold text-green-800">
        Welcome to AgriNova 
      </div>
    }
  />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/search" element={<SearchResults />} />
</Routes>
    </Router>
  );
};

export default App;
