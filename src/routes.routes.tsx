import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Test } from "./pages/Test";
import { Promocoes } from "./pages/Promocoes";
import { Pedidos } from "./pages/Pedidos";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Test />} />
        <Route path="/promocoes" element={<Promocoes/>} />
        <Route path="/pedidos" element={<Pedidos/>} />
      
        
      </Routes>
    </BrowserRouter>
  );
}
