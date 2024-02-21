import React from "react";
import {getNote} from "@/lib/notes";
import NoteForm from "@/components/NoteForm/NoteForm";

export default async function CreateNotePage({
                                                 params,
                                             }: {
    readonly params: {
        readonly noteId: string | string[] | undefined;
    };
}) {

    return <NoteForm noteId={Number(params.noteId)} type="create"/>;
}
