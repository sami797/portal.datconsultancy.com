import { SVGProps } from "react";

export const DocumentIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24" fill="none"
            {...props}
        >
            <path
                d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
                stroke={props.stroke || "#137749"} strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
            ></path>
            <path
                d="M22 10h-4c-3 0-4-1-4-4V2l8 8ZM7 13h6M7 17h4"
                stroke={props.stroke || "#137749"} strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
            >
            </path>
        </svg>
    );
};