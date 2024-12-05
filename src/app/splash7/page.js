"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Link from 'next/link';


export default function splash7() {
    const [email, setEmail] = useState(""); // State to store the input value
    const router = useRouter(); // Using useRouter for navigation

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            if (email.trim()) {
                router.push(`/splash5?email=${encodeURIComponent(email)}`); // Redirect to splash5
            } else {
                alert("Please enter an email before proceeding.");
            }
        }
    };

    return (
        <main className="flex flex-col">
            <div className="relative flex items-center justify-center ">
                {/* Back Button */}
                <button
                    onClick={() => router.back("/splash5")} // Navigate to the previous page
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

                    <div className="flex flex-col text-start font-normal text-xm">
                        <p>Enter verification code we sent to your email</p>
                        <input
                            type="email"
                            className="peer px-4 pt-3 outline-none bg-transparent text-black  border border-gray-300 rounded-2xl h-12 w-80 text-xl relative focus-within:border-gray-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state on input change
                            onKeyDown={handleKeyDown} // Handle Enter key
                            placeholder="12345"
                        />
                        <label className="text-gray-400 absolute left-4 top-3 transition-all duration-300 peer-focus:text-xs peer-focus:top-2 peer-focus:text-gray-500">
                        </label>
                        
                        <Link href="# " className="text-sky-600 underline font-bold text-end">Resend code</Link>
                    </div>
                    <Link href={`/splash6`} className="w-full flex flex-col gap-4 ">
                        <Button varient="filled"> Continue</Button>
                    </Link>
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
