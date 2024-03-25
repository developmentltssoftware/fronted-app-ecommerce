import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Test } from "./pages/Test";
import { Home } from "./pages/Home";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
