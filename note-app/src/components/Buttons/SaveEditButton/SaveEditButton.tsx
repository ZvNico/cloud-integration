"use client";
import React from "react";
import styles from "./SaveEditButton.module.scss";
import Button from "@/components/Buttons/Button/Button";
import Tick from "@/assets/vectors/tick.svg";
import {NotesContext} from "@/components/NotesProvider/NotesProvider";
import Link from "next/link";

type Props = {
    title?: string;
    content?: string;
    noteId: number;
};

const SaveEditButton = ({title, content, noteId}: Props) => {
    const {updateNote} = React.useContext(NotesContext);
    const handleSavePost = async () => {
        await updateNote(noteId, title, content);
    };

    return (
        <Link className={styles.button} href={`/notes/${noteId}`}>
            <Button
                backgroundColor="blue"
                size="md"
                type="submit"
                borderRadius="circle"
                onClick={() => handleSavePost()}
            >
        <span className={styles.buttonContent}>
          <Tick className={styles.vector}/> Done
        </span>
            </Button>
        </Link>
    );
};

export default SaveEditButton;
