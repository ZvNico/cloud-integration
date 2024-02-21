import React from "react";
import styles from "./NoteCard.module.scss";
import Link from "next/link";
import NoteWithMarkdown from "../NoteWithMarkdown/NoteWithMarkdown";

type Props = {
    title: string;
    date: string;
    key: number;
    id: number;
    content: string;
};

const NoteCard = ({title, date, id, content}: Props) => {
    return (
        <Link href={`/notes/${id}`} className={styles.link}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.content}>
          <NoteWithMarkdown text={content as string}/>
        </span>
                <p className={styles.date}>{date}</p>
            </div>
        </Link>
    );
};

export default NoteCard;
