import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { MenuIcon, ShipIcon, SidebarClose } from "lucide-react";
import { menuAttributes } from "../lib/definitions";
import UserNav from "./UserNav";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Navbar({ isOpen, setIsOpen }: menuAttributes) {
  const { login, register, user, isAuthenticated, isLoading } = useKindeAuth();
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-center text-xl font-medium text-muted-foreground">
          Loading...
        </p>
        ;
      </div>
    );
  }
  return (
    <nav className="bg-background border-b h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <div className="w-fit flex items-center gap-2">
          <Link to="">
            <h1 className="flex gap-2 capitalize">
              <ShipIcon className="text-red-700" size={30} />
              <span className="text-2xl font-medium tracking-widest italic hidden md:flex">
                cargoStream
              </span>
            </h1>
          </Link>
          {!isOpen ? (
            <MenuIcon
              className="block lg:hidden cursor-pointer" size={30}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <SidebarClose
              className="block lg:hidden cursor-pointer" size={30}
              onClick={() => setIsOpen(!isOpen)}  
            />
          )}
        </div>
        <div className="flex items-center gap-x-5">
          <ModeToggle />
          {isAuthenticated ? (
            <UserNav
              email={user?.email as string}
              name={user?.given_name as string}
              image={user?.picture as string}
            />
          ) : (
            <div className="flex items-center gap-x-5">
              <Button onClick={() => register()} type="button">
                Sign up
              </Button>
              <Button onClick={() => login()} type="button">
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
