type Note = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null
};

type LocalStorageNote = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    userId: string | null;
}

type PrismaNote = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}

export {
    Note,
    PrismaNote,
    LocalStorageNote
}