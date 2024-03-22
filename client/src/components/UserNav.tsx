"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { userInfo } from "../lib/user-info";
import { navItem } from "../lib/nav-item";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


export default function UserNav({ email, name, image }: userInfo) {
  const { logout } = useKindeAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage
              src={image}
              alt={`${name} image`}
            />
            <AvatarFallback>Note</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs text-muted-foreground leading-none">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItem.map((item, index) => {
            return (
              <DropdownMenuItem key={index} asChild>
                <Link to={item.href} className="w-full">
                  <span className="relative w-full flex justify-between items-center gap-2">
                    <span className="">{item.name}</span>
                    <item.icon className="w-4 h-4 text-primary" />
                  </span>
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
          <Button className="w-full" onClick={() => logout()} type="button">Sign out</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
