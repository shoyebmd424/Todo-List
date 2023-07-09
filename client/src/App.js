import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AddItem from "./Pages/AddItem";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
