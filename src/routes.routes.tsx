import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Test } from "./pages/Test";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
