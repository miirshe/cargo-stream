import { Button } from "../components/ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddShip = () => {
  return (
    <div className="md:container mt-5">
      <div className="flex flex-col space-y-5">
        <div className="w-full flex items-center justify-between gap-3">
          <h1 className=" text-base md:text-xl font-medium tracking-wider flex items-center gap-3">
            <Link to={"/dashboard"}>Dashboard</Link>
            <ArrowBigLeftDash className="inline" size={20} />
            <Link to={"/dashboard/ships"}>Ships</Link>
          </h1>
          <Button className="flex items-center gap-3">
            <Link to={"/dashboard/ships"} className="text-base font-medium">
              <IoMdArrowBack className="inline" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddShip;
