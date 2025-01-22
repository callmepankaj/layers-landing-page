import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
    "border sm:h-12 rounded-full text-sm px-1  sm:text-md sm:px-6 font-medium",
    {
        variants: {
            variant: {
                primary: "bg-lime-400 text-neutral-950 border-lime-400",
                secondary: "border-white text-white bg-transparent ",
            },
            size: {
                sm: "h-10",
            },
        },
    }
);

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;

    return (
        <button
            className={classes({
                variant,
                className,
                size,
            })}
            {...otherProps}
        />
    );
}
