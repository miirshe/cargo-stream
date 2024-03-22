import { navItem } from "../lib/nav-item";
import { cn } from "../lib/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";
const DashboardNav = () => {
  const location = useLocation();

  return (
    <nav className="grid items-start gap-2 mt-5">
      {navItem.map((item, index) => {
        return (
          <Link to={item.href} key={index} >
            <span
              className={cn(
                "group flex  items-center px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-lg text-sm font-medium",
                location.pathname == item.href ? "bg-accent" : "bg-transparent"
              )}
            >
              <item.icon className="w-4 h-4 mr-2 text-primary" />
              <span>{item.name}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardNav;
