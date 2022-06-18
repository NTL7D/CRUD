/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Err404 from "./pages/404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddEdit />} />
          <Route path="update/:id" element={<AddEdit />} />
          <Route path="*" element={<Err404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
