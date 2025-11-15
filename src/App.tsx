import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CNN_MNIST from "./pages/CNN_MNIST";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CNN_MNIST" element={<CNN_MNIST />} />
    </Routes>
  );
}

export default App;
