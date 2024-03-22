import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import Ship from "./pages/Ship";
import Shipping from "./pages/Shipping";
import ShipOwner from "./pages/ShipOwner";
import Items from "./pages/Items";
import { ThemeProvider } from "./components/theme-provider";
import { useState } from "react";
import AddItem from "./pages/AddItem";
import AddShip from "./pages/AddShip";
import AddShipping from "./pages/AddShipping";
import AddShipOwner from "./pages/AddShipOwner";
import { Toaster } from "react-hot-toast";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <KindeProvider
        clientId="d0034f0dd314424e85dd6b862ba956f9"
        domain="https://cargosystem.kinde.com"
        redirectUri="http://localhost:5173/dashboard"
        logoutUri="http://localhost:5173"
      >
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="ships" element={<Ship />} />
            <Route path="shippings" element={<Shipping />} />
            <Route path="ship-owners" element={<ShipOwner />} />
            <Route path="items" element={<Items />} />
            <Route path="item/add" element={<AddItem />} />
            <Route path="item/edit/:id" element={<AddItem />} />
            <Route path="ship/add" element={<AddShip />} />
            <Route path="ship/edit/:id" element={<AddShip />} />
            <Route path="shipping/add" element={<AddShipping />} />
            <Route path="shipping/edit/:id" element={<AddShipping />} />
            <Route path="shipowner/add" element={<AddShipOwner />} />
            <Route path="shipowner/edit/:id" element={<AddShipOwner />} />
          </Route>
        </Routes>
        <Toaster />
      </KindeProvider>
    </ThemeProvider>
  );
};
export default App;
