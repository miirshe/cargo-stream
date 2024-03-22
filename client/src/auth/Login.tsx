import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { loginSchema } from "../Schemas/auth";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShipIcon } from "lucide-react";
import { useLoginUserMutation } from "../provider/userSlice";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
const Login = () => {
  const navigator = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isPending, startTransition] = useTransition();
  const [loginUser] = useLoginUserMutation()

  async function handleLogin(values: z.infer<typeof loginSchema>) {
    startTransition(() => {
      loginUser(values)
        .then((res) => {
          const message = res?.data?.message;
          if(message){
            toast.success(message);
            navigator('/dashboard');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Card className="md:w-[23rem] mx-3 md:mx-0">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <ShipIcon className="text-red-700" size={30}/>
            <span className="text-2xl font-medium tracking-widest italic">cargoStream</span>
          </CardTitle>
        </CardHeader>
        <hr className="bg-muted-foreground" />
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Your Email" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Your Password" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isPending} type="submit" className="w-full text-center"  variant={"default"}>
                {isPending ? <FiLoader className="animate-spin mr-4" /> : null}
                <span>Login</span>
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p className="mt-3 text-center space-x-2">
            <span>I don't have an account?</span>
            <Link className="text-slate-600" to={"/auth/register"}>
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
