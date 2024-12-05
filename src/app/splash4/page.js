"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function splash4() {
    const [name, setName] = useState(""); // State to store the input value
    const router = useRouter(); // Using useRouter for navigation
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        if (name.trim()) {
          router.push(`/splash5?name=${encodeURIComponent(name)}`); // Redirect to splash5
        } else {
          alert("Please enter a name before proceeding.");
        }
      }
    };
  
    return (
      <main>
        <div className="relative flex flex-col items-center justify-center">
        {/* Back Button */}
        <button
          onClick={() => router.back()} // Navigate to the previous page
          className="absolute top-4 left-4 px-4 py-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        >
          Back
        </button>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-3xl font-medium text-center max-w-96">
              Great, what should I call you going forward?
            </h2>
            <div className="border border-gray-300 rounded-full h-14 w-96 text-xl relative focus-within:border-gray-400">
              <input
                type="text"
                className="peer w-full h-full px-4 pt-3 outline-none bg-transparent text-black"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state on input change
                onKeyDown={handleKeyDown} // Handle Enter key
                placeholder=" "
              />
              <label className="text-gray-400 absolute left-4 top-3 transition-all duration-300 peer-focus:text-xs peer-focus:top-2 peer-focus:text-gray-500">
                Your name
              </label>
            </div>
          </div>
        </div>
      </main>
    );
  }

// export default function splash4() {

//   return (
//     <main>
//       <div className="w-full h-screen flex items-center justify-center">
//         <div className="flex flex-col gap-6 items-center">
//           <h2 className="text-3xl font-medium text-center max-w-96">
//             Great, what should I call you going forward?
//           </h2>
//           <div className="border border-gray-300 rounded-full h-14 w-96 text-xl relative focus-within:border-gray-400">
//             <input type='text' className="peer w-full h-full px-4 pt-3 outline-none bg-transparent text-black"/>
//             <label className="text-gray-400 absolute left-4 top-3 transition-all duration-300 peer-focus:text-xs peer-focus:top-2 peer-focus:text-gray-500">Your name</label>
//         </div>
          

//         </div>

//       </div>
//     </main>

//   )
// }