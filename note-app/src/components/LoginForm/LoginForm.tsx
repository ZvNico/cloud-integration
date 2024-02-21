"use client"
import React, {useState} from 'react';
import styles from './LoginForm.module.scss';
import Button from "@/components/Buttons/Button/Button";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import {AuthContext} from "@/components/AuthProvider/AuthProvider";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {authenticate, user} = React.useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        authenticate(username, password).then(() => {
            router.push('/')
        });
    }

    return (
        <div className={styles.loginForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder={"Username"}
                    className={styles.input}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder={"Password"}
                    className={styles.input}
                />
                <Button size="lg" backgroundColor="blue" type={"submit"}>
                    Login
                </Button>
                <div className={styles.register}>
                    <p>Don't have an account? </p>
                    <br/>
                    <LinkButton size={"md"} backgroundColor={"blue"} link={"/register"} text={"Register"}/>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;