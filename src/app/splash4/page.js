import React from "react"

export default function splash4() {

  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-3xl font-medium text-center max-w-96">
            Great, what should I call you going forward?
          </h2>
          <div className="border border-gray-300 rounded-full h-14 w-96 text-xl relative focus-within:border-gray-400">
            <input type='text' className="peer w-full h-full px-4 pt-3 outline-none bg-transparent text-black"/>
            <label className="text-gray-400 absolute left-4 top-3 transition-all duration-300 peer-focus:text-xs peer-focus:top-2 peer-focus:text-gray-500">Your name</label>
        </div>
          

        </div>

      </div>
    </main>

  )
}