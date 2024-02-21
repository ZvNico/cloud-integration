"use client";
import React from "react";
import Button from "../Button/Button";
import AddIcon from "@/assets/vectors/add.svg";
import {useRouter} from "next/navigation";
import styles from "./AddNoteButton.module.scss";
import Link from "next/link";

const AddNoteButton = () => {
        return (
        <Link href={"/notes/create"}>
            <Button backgroundColor="blue" size="lg">
                <AddIcon/>
                Add Note
            </Button>
        </Link>
    );
};

export default AddNoteButton;
