"use client"
import React, {useState} from 'react';
import styles from './RegisterForm.module.scss';
import Button from "@/components/Buttons/Button/Button";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import {AuthContext} from "@/components/AuthProvider/AuthProvider";
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {register} = React.useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        register(username, password).then(r => {
            router.push('/login')
        });
    }

    return (
        <div className={styles.registerForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"
                    className={styles.input}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    className={styles.input}
                />
                <Button size="lg" backgroundColor="blue" type="submit">
                    Register
                </Button>
                <div className={styles.login}>
                    <p>Already have an account?</p>
                    <LinkButton size="md" backgroundColor="blue" link="/login" text="Login"/>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;