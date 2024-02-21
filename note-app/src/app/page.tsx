"use client"
import styles from "./page.module.scss";
import AddNoteButton from "@/components/Buttons/AddNoteButton/AddNoteButton";
import React from "react";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import {AuthContext} from "@/components/AuthProvider/AuthProvider";
import Button from "@/components/Buttons/Button/Button";

export default function Home() {
    const {user, logout} = React.useContext(AuthContext);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
            </header>
            <main className={styles.main}>
                <p className={styles.sentence}>← Access your notes on the left</p>
                <p className={styles.sentence}>Add a new note with add note button ↓</p>
                <AddNoteButton/>
                {user
                    ?
                    <>
                        <p className={styles.sentence}>You are logged in as {user.username}</p>
                        <p className={styles.sentence}>Disconnect with logout button ↓</p>
                        <Button size={"lg"} backgroundColor={"blue"} onClick={() => logout()}>Logout</Button>
                    </>
                    : <>
                        <p className={styles.sentence}>Save the notes on your account with login button ↓</p>
                        <LinkButton size={"lg"} backgroundColor={"blue"} link={"/login"} text={"Login"}/>
                    </>
                }

            </main>
        </div>
    );
}
