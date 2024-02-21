"use client"
import React from "react";
import styles from "./Note.module.scss";
import EditButton from "@/components/Buttons/EditButton/EditButton";
import NoteWithMarkdown from "../NoteWithMarkdown/NoteWithMarkdown";
import {NotesContext} from "@/components/NotesProvider/NotesProvider";

type Props = {
    noteId: number;
};

const Note = ({noteId}: Props) => {
    const {notes} = React.useContext(NotesContext);
    const note = notes.find((note) => note.id === noteId);
    const {title, content, createdAt} = note || {};

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };
    return (
        <div className={styles.notesContainer}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1> {title}</h1>
                    <p className={styles.date}>
                        {" "}
                        {createdAt?.toLocaleDateString("en-GB", options)}{" "}
                    </p>
                </div>
                <EditButton/>
            </div>
            <div className={styles.content}>
                <NoteWithMarkdown text={content as string}/>
            </div>
        </div>
    );
};

export default Note;
