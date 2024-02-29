import type {Metadata} from "next";
import {Inter} from "next/font/google";
import SideBar from "@/components/SideBar/SideBar";
import "./globals.css";
import styles from "./layout.module.scss";
import React from "react";
import Providers from "@/components/Providers/Providers";

export const dynamic = "force-dynamic";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Note app",
    description: "Web application to create and manage notes",
    icons: [
        {
            url: '/note-app/favicon-light.svg',
            media: '(prefers-color-scheme: light)',
        },
        {
            url: '/note-app/favicon-dark.svg',
            media: '(prefers-color-scheme: dark)',
        },
    ]
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={styles.container}>
            <Providers>
                <SideBar/>
                <main className={styles.main}>
                    {children}
                </main>
            </Providers>
        </div>
        </body>
        </html>
    );
}
