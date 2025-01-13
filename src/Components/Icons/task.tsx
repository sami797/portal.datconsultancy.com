import { SVGProps } from "react";

export const TaskIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26" height="26" viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                d="M11 19.5h10M11 12.5h10M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"
                stroke={props.stroke || "#137749"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            ></path>
        </svg>
    );
};