import { SVGProps } from "react";

export const DrawingIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="26" height="26"
            fill={props.fill || "#137749"}
            {...props}
        >
            <path d="M58.9194,15.1592l1.6421-2.9624A3.5053,3.5053,0,0,0,59.1973,7.44h-.001a3.5047,3.5047,0,0,0-4.7588,1.3642L51.0029,15H9a3.0033,3.0033,0,0,0-3,3v1a3,3,0,0,0,0,6v2a3,3,0,0,0,0,6v2a3,3,0,0,0,0,6v1.5151a3,3,0,0,0,0,6V54a3.0033,3.0033,0,0,0,3,3H56a3.0033,3.0033,0,0,0,3-3V52.8157A2.995,2.995,0,0,0,61,50V18A2.9937,2.9937,0,0,0,58.9194,15.1592ZM43.7777,33.1929l1.7493.97-2.0377,1.6144Zm3.1558-.5368L44.31,31.2018l9.6961-17.4933L56.63,15.1631ZM58.2266,9.1885a1.5011,1.5011,0,0,1,.5849,2.039l-1.2121,2.1869L54.975,11.96l1.2115-2.1858A1.503,1.503,0,0,1,58.2266,9.1885ZM5,22a1.0009,1.0009,0,0,1,1-1v2A1.0009,1.0009,0,0,1,5,22Zm0,8a1.0009,1.0009,0,0,1,1-1v2A1.0009,1.0009,0,0,1,5,30Zm0,8a1.0009,1.0009,0,0,1,1-1v2A1.0009,1.0009,0,0,1,5,38Zm0,7.5151a1.001,1.001,0,0,1,1-1v2A1.0009,1.0009,0,0,1,5,45.5151ZM56,55H9a1.0009,1.0009,0,0,1-1-1V52.8157A2.966,2.966,0,0,0,9,53H57v1A1.0009,1.0009,0,0,1,56,55Zm3-5a1.0009,1.0009,0,0,1-1,1H9a1.0009,1.0009,0,0,1-1-1V44.5151a1.001,1.001,0,0,1,1,1,1,1,0,0,0,2,0,3.0033,3.0033,0,0,0-3-3V37a1.0009,1.0009,0,0,1,1,1,1,1,0,0,0,2,0,3.0033,3.0033,0,0,0-3-3V29a1.0009,1.0009,0,0,1,1,1,1,1,0,0,0,2,0,3.0033,3.0033,0,0,0-3-3V21a1.0009,1.0009,0,0,1,1,1,1,1,0,0,0,2,0,3.0033,3.0033,0,0,0-3-3V18a1.0009,1.0009,0,0,1,1-1H49.8943L42.0752,31.1064a1.0106,1.0106,0,0,0-.1191.3741l-.0005.0036,0,.0017-.721,6.4541a1,1,0,0,0,1.6152.8946l5.0947-4.0357c.0105-.0083.0157-.0216.0258-.03a.981.981,0,0,0,.2281-.2685L57.899,17H58a1.0009,1.0009,0,0,1,1,1Z" />
            <path d="M45.085,39.6929a1,1,0,0,0-.6387,1.2622c.5068,1.5429.3555,2.7163-.4629,3.5884-1.7764,1.8906-6.5508,2.2944-11.6182.9785-5.1113-1.3272-8.872-4.0132-9.582-6.8433a4.3541,4.3541,0,0,1,.5918-3.3677c.9951-1.5756,2.9727-2.7021,5.7207-3.2568,4.2207-.8521,8.6016-3.2993,8.8086-6.3271.0879-1.2823-.5479-3.0684-4.0752-4.2984a1,1,0,0,0-.6582,1.8887c1.0557.3681,2.8145,1.1528,2.7383,2.2734-.1,1.4614-3.085,3.67-7.21,4.503-4.164.8408-6.1133,2.7207-7.0156,4.15a6.377,6.377,0,0,0-.84,4.9213c1.0742,4.2837,6.3964,7.0923,11.0195,8.293a25.5127,25.5127,0,0,0,6.2373.83c2.9248,0,5.707-.6348,7.3408-2.3755.9248-.9858,1.833-2.7539.9053-5.581A1.0013,1.0013,0,0,0,45.085,39.6929Z" />
        </svg>
    );
};