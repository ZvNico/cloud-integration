"use client";
import React, {ComponentPropsWithoutRef} from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type Props = ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    backgroundColor?: "blue" | "white" | "red" | "gray" | "lightBlue";
    borderRadius?: "rounded" | "circle";
};

const Button = ({
                    children,
                    size = "md",
                    backgroundColor,
                    borderRadius = "rounded",
                    disabled = false,
                    ...props
                }: Props) => {
    return (
        <button
            disabled={disabled}
            className={cn(
                styles.container,
                size && styles[size],
                backgroundColor && styles[backgroundColor],
                borderRadius && styles[borderRadius],
                {[styles.disabled]: disabled}
            )}
            {...props}
        >
            <span className={styles.link}>{children}</span>
        </button>
    );
};

export default Button;
