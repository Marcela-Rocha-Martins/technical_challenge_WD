import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PhoneList } from "./pages/PhoneList";
import { Navbar } from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneList />} />
      </Routes>
    </div>
  );
}

export default App;