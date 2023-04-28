import { StyrelseMember } from "@/app/styr/page";
import Link from "next/link";

interface StyrcardProps {
    info: StyrelseMember;
}



export default function Styrcard({ info }: StyrcardProps) {

    return (
        <div>
            <div className="flex flex-col gap-2 w-full dark:bg-neutral-900 bg-white/50 p-4 items-center  rounded-lg pt-10 ">
                <h2 className="font-extrabold flex gap-2 items-center">
                    {info.forename} <span className="italic text-sm font-normal">&quot;{info.nickname}&quot;</span> {info.surname}
                </h2>
                <p className="text-gray-500">
                    {info.role}
                </p>
                <p className="text-gray-500">
                </p>
                </div>
        </div>

    );
}