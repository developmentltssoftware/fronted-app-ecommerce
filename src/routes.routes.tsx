import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./pages/Button";
import { Login } from "./pages/login/Login";
import { Pedidos } from "./pages/pedidos/Pedidos";
import { Promocoes } from "./pages/promocoes/Promocoes";
import { Home } from "./pages/home/Home";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/pedidos" element={<Pedidos />} />n
        <Route path="/button" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
