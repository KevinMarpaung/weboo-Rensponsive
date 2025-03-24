import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="Home" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
