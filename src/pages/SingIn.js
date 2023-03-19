import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Input, Button } from "../components/ScStyle";
import { users } from "../users";

const SingIn = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUserNameChange = (e) => (
        setUserName(e.target.value))

    const handlePasswordChance = (e) => (
        setPassword(e.target.value))

    const handleSingIn = () => {
        if (username === users.username && password === users.password) {
            toast.success('login success!', {
                position: "top-center",
                theme: "dark"
            })
            setTimeout(() => {
                navigate("/home")
            }, 3000);
           // console.log('login success')

        } else {
            toast.error("username or password wrong!", {
                position: "top-center",
                theme: "dark"
            })
           // console.log('username or password wrong!')
        }
    }

    return (
        <div className="singInMain">
            <h1 style={{ color: 'white' }}>welcome</h1>
            <Container>
                <Input value={username} onChange={handleUserNameChange} placeholder="username" />
                <Input value={password} onChange={handlePasswordChance} type={'password'} placeholder="password" />
                <Button onClick={handleSingIn}>
                    <span>sing in</span>
                </Button>
                <ToastContainer />
            </Container>
        </div>
    )
}

export default SingIn