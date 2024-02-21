import React from "react";
import styles from "./page.module.scss";
import Note from "@/components/Note/Note";
import NoteForm from "@/components/NoteForm/NoteForm";

export default async function NotesPage({
                                            params,
                                            searchParams,
                                        }: {
    readonly params: {
        readonly noteId: string | string[] | undefined;
    };
    searchParams: {
        readonly isEditing: string | string[] | undefined;
    };
}) {
    const noteId = Number(params.noteId);
    const {isEditing} = searchParams;

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };

    return (
        <>
            {isEditing === "true" ? (
                <NoteForm
                    noteId={noteId}
                    type="edit"
                ></NoteForm>
            ) : (
                <div className={styles.container}>
                    <Note noteId={noteId}/>
                </div>
            )}
        </>
    );
}
