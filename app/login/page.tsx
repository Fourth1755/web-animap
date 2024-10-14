"use client";
import { DialogBody, Input, Button } from "../components/mtailwind";
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

    const handleSubmit = async () => {
        const user: UserData = {
            email: formData.email,
            password: formData.password
        }
        await login(user)
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
                    <DialogBody className="space-y-4 pb-6">
                        <h3>Email</h3>
                        <Input
                                label="Email"
                                crossOrigin={undefined}
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                            />
                            <h3>Password</h3>
                                                        <Input
                                label="Password"
                                crossOrigin={undefined}
                                value={formData.password}
                                name="password"
                                onChange={handleInputChange}
                            />
                    </DialogBody>
                    {/*<FormControl
                        fullWidth
                        sx={{
                            color: 'white',
                            mb: 3
                        }}
                        variant="standard"
                    >
                        
                         <OutlinedInput
                            id="outlined-adornment-password"
                            className='textField'
                            type={values.showPassword ? 'text' : 'password'}
                            value={password}
                            hiddenLabel
                            required
                            placeholder="password"
                            onChange={handleChangePassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl> */}
                    <button className='login-button' onClick={handleSubmit}>Sign In</button>
                    {/* <FormControlLabel
                        label="Remember Me"
                        sx={{
                            '.MuiFormControlLabel-label': {
                                color: 'white',
                            },
                        }}
                        control={<Checkbox
                            checked={checked}
                            onChange={handleChangeChecked}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },

                            }}
                        />} /> */}
                    <div className='login-card-bottom'><p>New to animap?</p><Link href="/register">Sign Up now</Link></div>
                </div>
            </div>
        </div>);
}