import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alt12 from "./Alt12";
import Alt16 from "./Alt16";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/horizontal" element={<Alt16 />} />
        <Route exact path="/vertical" element={<Alt12 />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <a className="block" href="/horizontal">Horizontal</a>
      <a className="block" href="/vertical">Vertical</a>
    </div>
  );
};
export default App;
