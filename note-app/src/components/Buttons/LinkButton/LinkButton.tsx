"use client";
import React, {useState} from "react";
import Button from "@/components/Buttons/Button/Button";
import Link from "next/link";

interface Props {
    link: string;
    text: string;

    [key: string]: any;
}

const LinkButton = ({link, text, ...rest}: Props) => {
    return (
        <Link href={link}>
            <Button {...rest}>
                {text}
            </Button>
        </Link>
    );
};

export default LinkButton;
