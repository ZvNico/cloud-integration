"use client";
// UserContext.tsx
import React, {createContext, useState} from 'react';
import {authenticate as authenticateGRPC, register as registerGRPC, verifyToken as verifyTokenGRPC} from '@/lib/auth';
import {User, PrismaUser} from "@/types/user";
import {jwtDecode} from "jwt-decode";

// Define the shape of the context
interface AuthProvideProps {
    user: User | null;
    logout: () => void;
    authenticate: (username: string, password: string) => Promise<any>
    register: (username: string, password: string) => Promise<number>;
    verifyToken: () => Promise<boolean>;
}

// Create the context with default values
export const AuthContext = createContext<AuthProvideProps>({
    user: null,
    logout: () => null,
    authenticate: async () => null,
    register: async () => 0,
    verifyToken: async () => false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    const authenticate = async (username: string, password: string) => {
        try {
            const res = await authenticateGRPC(username, password);
            const decoded: { id: number, username: string } = jwtDecode(res);
            setUser({id: decoded.id.toString(), username: decoded.username, token: res});
        } catch (e) {
            console.log(e);
        }
    }

    const register = async (username: string, password: string) => {
        return registerGRPC(username, password);
    }

    const logout = () => {
        setUser(null);
    }

    const verifyToken = async () => {
        if (!user) return false;
        return verifyTokenGRPC(user.token);
    }

    return (
        <AuthContext.Provider value={{user, authenticate, register, verifyToken, logout}}>
            {children}
        </AuthContext.Provider>
    );
};