"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import FormField from "./FormField";
import Image from "next/image";
import Link from "next/link";
import logo3 from "../../public/final-logo.png";

// Type define
type FormType = "sign-in" | "sign-up";

//  Validation Schema
const authFormSchema = (type: FormType) =>
  z.object({
    name: type === "sign-in" ? z.string().min(3, "Name is required") : z.string().optional(),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Min 6 characters required"),
  });

export default function AuthForm({ type }: { type: FormType }) {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const isSignIn = type === "sign-in";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitted Values: ", values); 

    try {
      if(type === "sign-up") {
        toast.success('Account Crate Successfully Please Sign In');
        router.push('/')
      } else{
         toast.success('Sign In Successfully ');
        router.push('/')
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="relative bg-[url('/loginbg.png')] bg-cover bg-bottom h-screen w-full flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Form Container */}
      <div className="relative z-20 max-w-96 w-full p-6 rounded-lg bg-[#313370]/50 shadow-lg animated-border">

        <div className="justify-center mx-auto flex items-center gap-2 mb-3">
          <Image src={logo3} alt="logo" className="w-48 rounded-md" />
          
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="text-gray-100">
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="name"
                  placeholder="Enter Your Name"
                  label="Name"
                  type="text"
                />
              )}
              <FormField
                control={form.control}
                name="email"
                placeholder="Enter Your Email"
                label="Email"
                type="email"
              />
              <FormField
                control={form.control}
                name="password"
                placeholder="Enter Your Password"
                label="Password"
                type="password"
              />
            </div>
            <Button
              className="w-full cursor-pointer bg-[#3c3e81] hover:bg-[#404388]"
              type="submit"
            >
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="mt-2 flex text-center mx-auto justify-center text-gray-200 font-sans">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            <p className="text-[#8286ff] underline">
              {!isSignIn ? "Sign In" : "Sign Up"}
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
}
