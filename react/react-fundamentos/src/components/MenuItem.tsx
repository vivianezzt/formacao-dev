import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function MenuItem(props: any){
    return(
        <Link href={props.url} className="bg-zinc-900 text-xl px-4 py-2 rounded-md w-full">
           {props.texto}
        </Link>
    )
}