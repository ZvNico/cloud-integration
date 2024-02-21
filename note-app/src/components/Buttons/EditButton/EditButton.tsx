"use client";
import React, {useState, useMemo} from "react";
import Button from "@/components/Buttons/Button/Button";
import Link from "next/link";
import {usePathname} from "next/navigation";

const EditButton = () => {
    const pathname = usePathname();

    const newUrl = useMemo(() => {
        if (typeof window === "undefined") return;
        const url = new URL(pathname, window.location.origin);
        const params = new URLSearchParams(url.search);
        params.set("isEditing", "true");
        url.search = params.toString();
        return url.pathname + url.search;
    }, []);

    return (
        <Link href={newUrl || ""}>
            <Button size="md" backgroundColor="blue">
                Edit
            </Button>
        </Link>
    );
};

export default EditButton;