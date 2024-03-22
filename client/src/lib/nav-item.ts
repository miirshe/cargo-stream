import { Home, User2Icon } from "lucide-react";
import { FaShip, FaSitemap } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
export const navItem = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Ship", href: "/dashboard/ships", icon: FaShip },
  { name: "Shipping", href: "/dashboard/shippings", icon: FaShippingFast },
  { name: "Ship Owner", href: "/dashboard/ship-owners", icon: User2Icon },
  { name: "Items", href: "/dashboard/items", icon: FaSitemap },
];
