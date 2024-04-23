import { IoMdArrowBack } from "react-icons/io";
import { Button } from "../components/ui/button";
import { useTransition } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { itemSchema } from "../Schemas/item";
import { z } from "zod";
import {
  useCreateItemMutation,
  useUpdateItemMutation,
} from "../provider/itemSlice";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import { Textarea } from "../components/ui/textarea";
import { ArrowBigLeftDash } from "lucide-react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const AddItem = () => {
  const navigator = useNavigate();
  const { isAuthenticated, user } = useKindeAuth();
  const itemState = useLocation().state;
  const form = useForm({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      item_name: itemState?.item_name || "",
      item_category: itemState?.item_category || "",
      item_description: itemState?.item_description || "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  async function onSubmit(values: z.infer<typeof itemSchema>) {
    const userId: string = (await user?.id) as string;
    const { item_name, item_category, item_description } = values;
    console.log("sending data", {
      item_name,
      item_category,
      item_description,
      userId,
    });

    startTransition(() => {
      if (isAuthenticated) {
        const itemId = itemState?._id;
        if (itemId) {
          updateItem({
            id: itemId,
            updateItem: { item_name, item_category, item_description },
          }).then((res) => {
            const message = res?.data.message as string;
            if (message) {
              toast.success(message);
              navigator("/dashboard/items");
            } else {
              toast.error(message);
            }
          });
        } else {
          createItem({ item_name, item_category, item_description, userId })
            .then((res) => {
              const message = res?.data.message as string;
              if (message) {
                toast.success(message);
                navigator("/dashboard/items");
              } else {
                toast.error(message);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    });
  }
  return (
    <div className="md:container mt-5">
      <div className="flex flex-col space-y-5">
        <div className="w-full flex items-center justify-between gap-3">
          <h1 className=" text-base md:text-xl font-medium tracking-wider flex items-center gap-3">
            <Link to={"/dashboard"}>Dashboard</Link>
            <ArrowBigLeftDash className="inline" size={20} />
            <Link to={"/dashboard/items"}>Items</Link>
          </h1>
          <Button className="flex items-center gap-3">
            <Link to={"/dashboard/items"} className="text-base font-medium">
              <IoMdArrowBack className="inline" size={20} />
            </Link>
          </Button>
        </div>

        <div className="w-full">
          <Card className="w-full lg:mx-3 md:mx-0 p-2 md:p-4">
            {/* <hr className="bg-muted-foreground" /> */}
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="item_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Item Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Item Name "
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="item_category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Item Category </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Item Category"
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="item_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Item Description</FormLabel>
                        <FormControl>
                          <Textarea
                            className="w-full"
                            rows={5}
                            placeholder="Type  her Item Description"
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full text-center"
                    variant={"default"}
                  >
                    {isPending ? (
                      <FiLoader className="animate-spin mr-4" />
                    ) : null}
                    <span>Save Channges</span>
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
