
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import logo from "../../public/logo.png"
import logo1 from "../../public/logo1.png"
import logo3 from "../../public/logo3.png"


import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"

import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"


const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const authFormSchema = (type:FormType) =>{
  return z.object ({
    name: type === "sign-in" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6),
  })
}



export default function AuthForm({type} : {type: FormType} ) {

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",

    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type === "sign-up") {
        console.log("sign up ",values )
      } else{
         console.log("sign in ",values )
      }
      
    } catch (error) {
      console.log(error)
      toast.error(`There was an error ${error}`)
      
    }
  }



  const isSignIn = type === "sign-in"


  return (
<div className="relative bg-[url('/sign_up.jpg')] bg-cover bg-bottom h-screen w-full flex items-center justify-center">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-10"></div>
 
  {/* Form Container */}
  <div className="relative z-20 max-w-96 w-full p-6 bg-[#313370]/50 rounded-lg shadow-lg">

  <div className="justify-center mx-auto flex items-center gap-2 ">
   <Image src={logo3} alt="logo" className="w-12 rounded-md" />
   <h1 className="text-white font-bold font-serif text-2xl ">Lexi Mock Ai</h1>
  </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
       <div className="text-gray-100">
         {!isSignIn && <p>Name</p>}
        <p>Email</p>
        <p>Password</p>
       </div>
        <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
      </form>
    </Form>
     <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
  </div>
</div>

  )
}
