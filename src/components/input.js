export default function inputField({inputFiel}) {

    return (
        <div className="border border-gray-300 rounded-full h-14 w-96 text-sm relative focus-within:border-white">
            <input type='text' className="w-full h-full px-4 pt-3 outline-none bg-transparent text-black peer-[]:"/>
            <label className="text-gray-400 absolute left-4 top-5 transition-all duration-300 peer-focus:text-xs peer-focus:top-2">Your name</label>
        </div>
    )
}