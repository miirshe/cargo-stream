import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../components/ui/form";
import { useForm } from "react-hook-form";
import { shipOwnerSchema } from "../Schemas/shipOwner";
import { zodResolver } from "@hookform/resolvers/zod";

const AddShipOwner = () => {
  const form = useForm({
    resolver: zodResolver(shipOwnerSchema),
    defaultValues: {
      company_name: "",
      contact_name: "",
      contact_email: "",
      contact_phone: "",
    },
  });
  return (
    <div className="md:container mt-5">
      <div className="flex flex-col space-y-5">
        <div className="w-full flex items-center justify-between gap-3">
          <h1 className=" text-base md:text-xl font-medium tracking-wider flex items-center gap-3">
            <Link to={"/dashboard"}>Dashboard</Link>
            <ArrowBigLeftDash className="inline" size={20} />
            <Link to={"/dashboard"}>Ship Owners</Link>
          </h1>
          <Button className="flex items-center gap-3">
            <Link
              to={"/dashboard/ship-owners"}
              className="text-base font-medium"
            >
              <IoMdArrowBack className="inline" size={20} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full">
        <Card className="w-full lg:mx-3 md:mx-0 p-2 md:p-4">
          <CardContent>
            <Form {...form}>
              <form>
                <FormField control={form.control} name="company_name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                  </FormItem>
                )}/>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddShipOwner;
