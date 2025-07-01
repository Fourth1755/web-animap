"use client";
import { logIn } from "./action";

export default function LoginButton() {
    const onLogIn = () => {
        logIn()
    }
    return (                    
    <button
        onClick={onLogIn}
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Login
      </button>)
}