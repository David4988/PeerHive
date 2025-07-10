import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VibeCheckPanel from "./components/VibeCheckPanel";
import EmotionalDamageBoard from "./components/EmotionalDamageBoard";
import Header from "./components/home/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-mood" element={<VibeCheckPanel />} />
        <Route path="/admin" element={<EmotionalDamageBoard />} />
      </Routes>
    </>
  );
}
export default App