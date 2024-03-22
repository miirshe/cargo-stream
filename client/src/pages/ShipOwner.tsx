import { IoMdAddCircle } from "react-icons/io";
import { Button } from "../components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowBigLeftDash } from "lucide-react";

const ShipOwner = () => {
  return (
    <div className="md:container mt-5">
      <div className="flex flex-col space-y-3">
        <div className="w-full flex items-center justify-between gap-3">
          <h1 className=" text-base md:text-xl font-medium tracking-wider flex items-center gap-3">
            <Link to={"/dashboard"}>Dashboard</Link>
            <ArrowBigLeftDash className="inline" size={20} />
            <Link to={"/dashboard/ship-owners"}>Ship Owners</Link>
          </h1>
          <Button className="flex items-center gap-3">
            <Link
              to={"/dashboard/shipowner/add"}
              className="text-base font-medium"
            >
              <IoMdAddCircle className="inline" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShipOwner;
