export default function Button({ children, varient }) {

    const baseStyles = "px-4 py-2 rounded-full font-semibold focus:outline-none transition duration-300 ease-in-out"

    const varientStyles = {
        filled: "bg-sky-600 text-white hover:bg-sky-900",
        outline: "bg-white text-sky-600 border-sky-600 border-0 hover:bg-sky-400 hover:text-white",
        underline: "bg-white text-sky-600 underline border-sky-600 border-0 hover:bg-gray-200 hover:text-sky-600"
    };
    let buttonClasses = `${baseStyles} ${varientStyles[varient]}`
    return <button className={buttonClasses}>{children}</button>;
}