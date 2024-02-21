"use client";
import React, {useEffect, useRef, useState} from "react";
import styles from "./NoteForm.module.scss";
import SaveEditButton from "@/components/Buttons/SaveEditButton/SaveEditButton";
import Button from "../Buttons/Button/Button";
import NoteWithMarkdown from "../NoteWithMarkdown/NoteWithMarkdown";
import CreateNoteButton from "../CreateNote/CreateNoteButton";
import {NotesContext} from "@/components/NotesProvider/NotesProvider";

type Props = {
    noteId?: number;
    type: "edit" | "create";
};

const NoteForm = ({noteId, type}: Props) => {
    const {getNote} = React.useContext(NotesContext);
    const [titleState, setTitle] = useState('');
    const [contentState, setContent] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (type === "edit" && noteId) {
            const note = getNote(noteId);
            if (!note) return;
            setTitle(note.title);
            setContent(note.content);
        }
    }, []);
    // useEffect(() => {
    //   adjustTextAreaHeight();
    // }, [textAreaRef]);

    // const adjustTextAreaHeight = () => {
    //   const textArea = textAreaRef.current;
    //   if (textArea) {
    //     textArea.style.height = "auto"; // Réinitialise la hauteur à la valeur par défaut pour recalculer la hauteur réelle.
    //     textArea.style.height = textArea.scrollHeight + "px"; // Ajuste la hauteur en fonction du contenu réel.
    //   }
    // };

    return (
        <div className={styles.editPageContainer}>
            <form
                ref={formRef}
                className={styles.container}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={titleState}
                    className={styles.input}
                    onChange={(e) => setTitle(e.target.value)}
                    name="titleContent"
                />
                <textarea
                    ref={textAreaRef}
                    placeholder="Content"
                    value={contentState}
                    className={styles.contentContainer}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                />
            </form>
            <div className={styles.previewContainer}>
                {type === "edit" ? (
                    <SaveEditButton
                        title={titleState}
                        content={contentState}
                        noteId={noteId!}
                    />
                ) : (
                    <CreateNoteButton
                        title={titleState as string}
                        content={contentState as string}
                    />
                )}

                <div className={styles.notePreview}>
                    <Button
                        backgroundColor="lightBlue"
                        size="md"
                        type="submit"
                        borderRadius="circle"
                    >
                        <span className={styles.buttonText}>PREVIEW</span>
                    </Button>
                    <div className={styles.notePreviewContent}>
                        <h2 className={styles.title}>{titleState}</h2>
                        <NoteWithMarkdown text={contentState as string}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteForm;
