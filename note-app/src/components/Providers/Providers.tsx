import {AuthProvider} from "@/components/AuthProvider/AuthProvider";
import {NotesProvider} from "@/components/NotesProvider/NotesProvider";
import React from 'react';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({children}) => {
    return (
        <AuthProvider>
            <NotesProvider>
                {children}
            </NotesProvider>
        </AuthProvider>
    );
};
export default Providers;