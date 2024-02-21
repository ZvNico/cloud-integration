"use server";
import prisma from './prisma';

export async function getNote(noteId: number) {
    try {
        return await prisma.note.findUnique({
            where: {
                id: Number(noteId),
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export async function getNotes(userId: string) {
    try {
        return await prisma.note.findMany({
            orderBy: {
                id: 'desc',
            },
            where: {
                userId: userId,
            }
        });
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function updateNote(noteId: number, title?: string, content?: string) {
    try {
        await prisma.note.update({
            where: {
                id: Number(noteId),
            },
            data: {
                title: title,
                content: content,
            }
        });
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function createNote(title: string, content: string, userId: string) {
    try {
        return await prisma.note.create({
            data: {
                title: title,
                content: content,
                userId: userId,
            }
        });

    } catch (err) {
        console.log(err);
        return null;
    }
}