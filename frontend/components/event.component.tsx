import { IEventAttributes, IEventInfo } from "@/types/types";
import Link from "next/link";

interface EventProps {
    event: IEventAttributes;
}


export default function EventPreview({ event }: EventProps) {
    return (
        <Link href={`/event/${event.attributes.info.id}`} className="flex  sm:flex-row flex-col  gap-2 w-full dark:bg-neutral-900  border-yellow-500/10 dark:border-2   bg-white/50 p-8 items-center  rounded-lg justify-between ">
            <div className="flex flex-col sm:items-start items-center">
                <h2 className="font-extrabold flex gap-2 items-center">
                    {event.attributes.info.name}
                </h2>
                <p className="text-gray-500">
                    {event.attributes.info.location}
                </p>
                <p>
                    {event.attributes.info.shortInfo}
                </p>
            </div>
            <div className="flex flex-col sm:items-end items-center ">
                <p className="text-gray-500">
                    {new Date(event.attributes.info.date).toLocaleDateString('sv-SE',
                        {
                            timeZone: event.attributes.info.tz ?? 'Europe/Stockholm',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                </p>
                <p>
                    {new Date(event.attributes.info.date).toLocaleTimeString('sv-SE',
                        {
                            timeZone: event.attributes.info.tz ?? 'Europe/Stockholm',

                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                </p></div>
        </Link>
    )
}


