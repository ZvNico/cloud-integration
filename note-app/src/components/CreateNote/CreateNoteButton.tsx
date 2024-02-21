"use client";
import React from "react";
import Button from "@/components/Buttons/Button/Button";
import {useRouter} from "next/navigation";
import {NotesContext} from "@/components/NotesProvider/NotesProvider";
import Link from "next/link";

type Props = {
    title: string;
    content: string;
};

const CreateNoteButton = ({title, content}: Props) => {
    const {createNote} = React.useContext(NotesContext);

    const handleClick = () => {
        createNote(title, content);
    };
    return (
        <Link href={"/"}>
            <Button size="md" backgroundColor="blue" onClick={handleClick}>
                Create
            </Button>
        </Link>
    );
};

export default CreateNoteButton;
