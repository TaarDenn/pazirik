import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alt12 from "./Alt12";
import Alt16 from "./Alt16";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/horizontal" element={<Alt16 />} />
        <Route exact path="/vertical" element={<Alt12 />} />z
      </Routes>
    </BrowserRouter>
  );
}

export default App;
