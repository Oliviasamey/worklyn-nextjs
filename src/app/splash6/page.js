"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/button";
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { ImWhatsapp } from "react-icons/im";
import { useForm } from "react-hook-form";



export default function splash6() {
    const router = useRouter(); // Using useRouter for navigation
    const searchParams = useSearchParams();
    const [name, setName] = useState("");
    // const name = searchParams.get("name");

    // document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    useEffect(() => {
        const nameFromParams = searchParams.get("name"); // Retrieve name from query string
        if (nameFromParams) {
            setName(decodeURIComponent(nameFromParams)); // Decode if necessary
        }
    }, [searchParams]);

    // react-hook-form setup
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle form submission and API call
    const onSubmit = async (data) => {
        console.log("Name in state:", name);
        console.log("Payload:", { username: name, email: data.email });
        try {
          const payload = {
            username: name,
            email: data.email,
          };
      
          console.log("Sending to API:", payload);
          console.log("Request Headers:", {
            "Content-Type": "application/json",
            Authorization: "Bearer your-token",
        });
        console.log("Request Payload:", JSON.stringify({ username, email }));
        
      
          const response = await fetch("/api/worklyn-proxy", { // Changed URL
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            //   "Authorization": "asdsadqdsadsafdfsdfds" // Keep the Authorization header here
            },
            body: JSON.stringify({ username: name, email: data.email }),
          });
      
          if (response.ok) {
            console.log("Data successfully sent to the server");
            router.push("/splash7");
          } else {
              const errorText = await response.text()
              console.error("Error sending data:", response.status, errorText);
          }
        } catch (error) {
          console.error("API request failed:", error);
        }
      };





    return (
        <main className="flex flex-col">
            <div className="relative flex items-center justify-center ">
                {/* Back Button */}
                <button
                    onClick={() => router.back("/splash7")} // Navigate to the previous page
                    className="absolute top-4 left-4 px-4 py-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
                >
                    Back
                </button>
            </div>
            <div className="w-full h-full pt-28 flex flex-col items-center justify-center">
                <div className="flex flex-col w-[20%] gap-6 items-center" >
                    <Button varient="underline">Continue as guest</Button>
                    <h2 className="text-2xl font-bold text-center max-w-96">
                        To get the best out of Worklyn, Sign in
                    </h2>
                    <p>Enter your email; address to get started</p>
                    <form
                        className="w-full flex flex-col gap-4"
                        onSubmit={handleSubmit(onSubmit)} // Attach form submit handler
                    >
                        <div className="border border-gray-300 rounded-2xl h-12 w-80 text-xl relative focus-within:border-gray-400">
                            <input
                                type="email"
                                className="peer px-4 pt-3 outline-none bg-transparent text-black"
                                placeholder="example@emailprovider.com"
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: "Please enter a valid email",
                                    },
                                })}
                            />
                            <label className="text-gray-400 absolute left-4 top-3 transition-all duration-300 peer-focus:text-xs peer-focus:top-2 peer-focus:text-gray-500"></label>
                        </div>
                        {/* Error Message */}
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                        <Button varient="filled">Continue with email</Button>
                    </form>
                    <h2 className="text-1xl font-medium text-center"> Or </h2>
                    <button className="px-4 py-2 rounded-full w-full border-gray-300 border flex justify-center items-center text-center gap-2">
                        <FcGoogle className="text-2xl" />
                        Continue with Google</button>
                    <button className="bg-green-500 px-4 py-2 rounded-full w-full text-white flex justify-center items-center gap-2">
                        <ImWhatsapp className="text-2xl" />
                        Continue with WhatsApp
                    </button>
                </div>

                <div className="absolute bottom-4 text-center font-light text-gray-600">
                    <p>
                        By continuing, you agree to Worklyn’s <Link href="# " className="text-sky-600 underline font-bold">Terms</Link> &
                    </p>
                    <p>
                        acknowledge their <Link href="#" className="text-sky-600 underline font-bold">Privacy Policy</Link>.
                    </p>
                </div>

            </div>
        </main>
    );
}


// old consumeDynamicAccess

// const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//         if (email.trim()) {
//             router.push(`/splash5?email=${encodeURIComponent(email)}`); // Redirect to splash5
//         } else {
//             alert("Please enter an email before proceeding.");
//         }
//     }
// };

{/* <div className="border border-gray-300 rounded-2xl  h-12 w-80 text-xl relative focus-within:border-gray-400">

    <input
        type="email"
        className="peer px-4 pt-3 outline-none bg-transparent text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update state on input change
        onKeyDown={handleKeyDown} // Handle Enter key
        placeholder="exemple@emailprovider.com "
    />
    <label className="text-gray-400 absolute left-4 top-3 transition-all duration-300 peer-focus:text-xs peer-focus:top-2 peer-focus:text-gray-500">
        
    </label>
</div>
<Link href={`/splash7`} className="w-full flex flex-col gap-4 ">
    <Button varient="filled"> Continue with email </Button>
</Link> */}