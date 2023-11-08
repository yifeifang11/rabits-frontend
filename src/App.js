import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowHabit from "./pages/ShowHabit";
import AddHabit from "./pages/AddHabit";
import EditHabit from "./pages/EditHabit";
import DeleteHabit from "./pages/DeleteHabit";
import Reset from "./pages/Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits/show/:id" element={<ShowHabit />} />
        <Route path="/habits/create" element={<AddHabit />} />
        <Route path="/habits/edit/:id" element={<EditHabit />} />
        <Route path="/habits/delete/:id" element={<DeleteHabit />} />
        <Route path="/carrots/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
