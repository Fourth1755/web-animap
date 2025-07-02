"use client";
import { Input } from "../components/mtailwind";
import { useEffect, useState } from "react";
import Link from "next/link";
import { login } from "./action";
import './layout.scss'

type FormData = {
    email: string;
    password: string;
}
type UserData = {
    email: string;
    password: string;
}

export default function Page() {

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        const user: UserData = {
            email: formData.email,
            password: formData.password
        }
        login(user)
    }
    return (
        <div>
            <div className='login-bar'>
                <div className='login-logo'>
                    <h1><a href='/'>AniMap</a></h1>
                </div>

            </div>
            <div className='login-container'>
                <div className='login-card'>
                    <h1>Sign In</h1>
                    <div className="space-y-4 pb-6">
                        <h3>Email</h3>
                            <Input
                                label="Email"
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                            />
                        <h3>Password</h3>
                            <Input
                                label="Password"
                                type="password"
                                value={formData.password}
                                name="password"
                                onChange={handleInputChange}
                            />
                    </div>
                    <button 
                        className='login-button' 
                        onClick={handleSubmit}>Sign In</button>
                    <div className='login-card-bottom'><p>New to animap?</p><Link href="/register">Sign Up now</Link></div>
                </div>
            </div>
        </div>);
}