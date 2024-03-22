import clsx from "clsx";
import { menuAttributes } from "../lib/definitions";
import DashboardNav from "./DashboardNav";
import { Outlet } from "react-router-dom";
import { cn } from "../lib/utils";

const DashboardLayout = ({ isOpen, setIsOpen }: menuAttributes) => {
  return (
    <div className="flex flex-col space-y-6 mt- relative">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside
          className={cn(
            "hidden w-[200px] md:flex flex-col",
            isOpen && 'block lg:hidden'
          )}
        >
          <DashboardNav />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
