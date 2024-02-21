"use client";
import React from "react";
import styles from "./SideBar.module.scss";
import NoteCard from "../NoteCard/NoteCard";
import {NotesContext} from "@/components/NotesProvider/NotesProvider";
import Link from "next/link";
import {Note} from "@/types/note";

const SideBar = () => {
    const {notes} = React.useContext(NotesContext);

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}><Link href={"/"}>Bloc notes</Link></h1>
            <div className={styles.noteList}>
                {notes?.map((note: Note) => (
                    <NoteCard
                        key={note.id}
                        content={note.content}
                        id={note.id}
                        title={note.title}
                        date={note.createdAt.toLocaleDateString("en-GB", dateOptions)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
