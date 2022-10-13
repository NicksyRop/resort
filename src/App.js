//import './App.css';
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:slug" element={<SingleRoom />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
