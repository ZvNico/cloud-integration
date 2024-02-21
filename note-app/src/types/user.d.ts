type User = {
    id: string;
    token: string;
    username: string;
    };

type PrismaUser = {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export {
    User,
    PrismaUser
}