"use client";
import { Input } from "../components/mtailwind";
import { useEffect, useState } from "react";
import Link from "next/link";
import { register } from "./action";
import './layout.scss'
import { RegisterRequest } from "../service/dtos/user";

type FormData = {
    username: string;
    email: string;
    password: string;
}
type UserData = {
    username: string;
    email: string;
    password: string;
}

export default function Page() {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
    });
    const [email,setEmail]=useState('')
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    
    const [isValidEmail,setIsValidEmail]=useState(false)
    const [isValidPassword,setIsValidPassword]=useState(false)
    const [isValidConPassword,setIsValidConPassword]=useState(false)
    const [letterPass,setLetterPass]=useState(false)
    const [capitalPass,setCapitalPass]=useState(false)
    const [numberPass,setNumberPass]=useState(false)
    const [lengthPass,setLengthPass]=useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleChangeEmail =(event: React.ChangeEvent<HTMLInputElement> | any)=>{
        const val =event.target.value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(val.match(validRegex)) {
            setIsValidEmail(true);              
         } else {
            setIsValidEmail(false);              
         }
         setEmail(val)
    }
    const handleChangePassword =(event: React.ChangeEvent<HTMLInputElement> | any)=>{
        const pass = event.target.value;
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if(pass.match(lowerCaseLetters)) {  
            setLetterPass(true)
        } else {
            setLetterPass(false)
        }
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(pass.match(upperCaseLetters)) {
            setCapitalPass(true)
            
        }else{
            setCapitalPass(false)
        }
        //   // Validate numbers
        var numbers = /[0-9]/g;
        if(pass.match(numbers)){
            setNumberPass(true)
        }else{
            setNumberPass(false)
        }
        //  // Validate length
        if(pass.length >= 8 && pass.length <= 64){
            setLengthPass(true)
        }else{
            setLengthPass(false)
        }
        if(pass.match(lowerCaseLetters) && pass.match(upperCaseLetters) && pass.match(numbers) && pass.length >= 8 && pass.length <= 64){
            setIsValidPassword(true)
        }else{
            setIsValidPassword(false);
        }
        setPassword(pass)
    }
    const handleChangeConfirmPassword =(event: React.ChangeEvent<HTMLInputElement> | any)=>{
        const conpass =event.target.value;
        if(conpass!==password){
            setIsValidConPassword(false)
        }else{
            setIsValidConPassword(true)
        }
        setConfirmPassword(conpass)
    }

    const handleSubmit = () => {
        const user: RegisterRequest = {
            name: formData.username,
            email: email,
            password: password
        }
        register(user)
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
                    <h1>Register</h1>
                    <div className="space-y-4 pb-6">
                        <h3>Username</h3>
                            <Input
                                label="Username"
                                crossOrigin={undefined}
                                value={formData.username}
                                name="username"
                                onChange={handleInputChange}
                            />
                        <h3>Email</h3>
                            <Input
                                label="Email"
                                crossOrigin={undefined}
                                value={email}
                                name="email"
                                onChange={handleChangeEmail}
                            />
                            {!isValidEmail?<p id="component-error-text">Email address is invalid</p>:<></>}
                        <h3>Password</h3>
                            <Input
                                label="Password"
                                type="password"
                                crossOrigin={undefined}
                                value={password}
                                name="password"
                                onChange={handleChangePassword}
                            />
                        <div className='register-password'>
                            <h5>Your password must contain the following:</h5>
                            <div id="letter" className={letterPass?"valid":"invalid"}><p>At least 1 lowercase letter</p></div>
                            <div id="capital" className={capitalPass?"valid":"invalid"}><p>At least 1 uppercase letter</p></div>
                            <div id="number" className={numberPass?"valid":"invalid"}><p>At least 1 number</p></div>
                            <div id="length" className={lengthPass?"valid":"invalid"}><p>8-64 characters</p></div>
                        </div>
                        <h3>Repeat Password</h3>
                            <Input
                                label="Password"
                                type="password"
                                crossOrigin={undefined}
                                value={confirmPassword}
                                name="confirmPassword"
                                onChange={handleChangeConfirmPassword}
                            />
                            {!isValidConPassword?<p id="component-error-text">Your passwords don't match.</p>:<></>}
                    </div>
                    <button 
                        className='login-button' 
                        onClick={handleSubmit}>Sign Up</button>
                    <div className='login-card-bottom'><p>Already have an account?</p><Link href="/login">Sign In</Link></div>
                </div>
            </div>
        </div>);
}