import "./App.css";
import EventsComponents from "./Components/EventsComponents";
import { Routes, Route } from "react-router-dom";
import CollectionComponents from "./Components/CollectionComponents";

function App() {
  return (
    <div className="bg-gray-800">
      <Routes>
        <Route path="/" element={<EventsComponents />} />
        <Route path="/collection" element={<CollectionComponents />} />
      </Routes>
    </div>
  );
}

export default App;
