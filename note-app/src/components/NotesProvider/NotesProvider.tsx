"use client";
import React, {useContext, createContext, useState, useEffect} from 'react';
import {AuthContext} from '@/components/AuthProvider/AuthProvider';
import {
    createNote as prismaCreateNote,
    getNote as prismaGetNote,
    getNotes as prismaGetNotes,
    updateNote as prismaUpdateNote
} from "@/lib/notes";
import {LocalStorageNote, Note} from "@/types/note";

interface NotesContextProps {
    notes: Note[];
    getNote: (noteId: number) => Note | undefined;
    getNotes: (noteId: number, title?: string, content?: string) => void;
    updateNote: (noteId: number, title?: string, content?: string) => void;
    createNote: (title: string, content: string) => void;
}

// Create the context with default values
export const NotesContext = createContext<NotesContextProps>({
    notes: [],
    getNote: () => undefined,
    getNotes: async () => undefined,
    updateNote: () => undefined,
    createNote: () => undefined,
});

const useNotes = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const {user, verifyToken} = useContext(AuthContext);


    useEffect(() => {
        if (user) {
            getNotes().then((notes) => {
                if (notes) setNotes(notes);
            });
        } else {
            let localStorageNotes = JSON.parse(localStorage.getItem('notes') || '[]') as LocalStorageNote[];
            setNotes(localStorageNotes.map(
                (note: LocalStorageNote) => ({
                    ...note,
                    createdAt: new Date(note.createdAt),
                    updatedAt: new Date(note.updatedAt),
                })
            ) as Note[]);
        }
    }, [user]);

    useEffect(() => {
        if (notes.length !== 0 && !user) localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const getNote = (noteId: number) => {
        return notes.find(note => note.id === noteId);
    }

    const getNotes = async () => {
        if (user) {
            const isValid = await verifyToken();
            if (!isValid) return;
            console.log('getting notes');
            console.log(user.id);
            return prismaGetNotes(user.id)
        }
    };

    const updateNote = (noteId: number, title?: string, content?: string) => {
        if (user) {
            verifyToken().then(
                isValid => {
                    if (!isValid) return;
                    prismaUpdateNote(noteId, title, content);
                }
            );
        }

        setNotes(notes.map(note => note.id === noteId ? {
            ...note,
            title: title || note.title,
            content: content || note.content
        } : note));
    };

    const createNote = (title: string, content: string) => {
        let newNote;
        if (user) {
            verifyToken().then(
                isValid => {
                    if (!isValid) return;
                    prismaCreateNote(title, content, user.id);
                }
            );
        }
        newNote = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: null
        };
        setNotes([newNote, ...notes]);
    };

    return {notes, getNote, getNotes, updateNote, createNote};
}

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const notesFunctions = useNotes();

    return (
        <NotesContext.Provider value={notesFunctions}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;