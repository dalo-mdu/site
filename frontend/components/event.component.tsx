
export interface Event {
    title: string;
    text: string;
    date: string;
    time: string;
    location: string;

}

interface EventProps {
    event: Event;
}


export default function EventPreview({ event }: EventProps) {
    return (
        <div className="flex gap-2 w-full dark:bg-neutral-900 bg-white/50 p-8 items-center  rounded-lg justify-between ">
            <div><h2 className="font-extrabold flex gap-2 items-center">
                {event.title}
            </h2>
            
            <p className="text-gray-500">
                {event.location}
            </p>
            <p>
                {event.text}
                </p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-gray-500">
                    {event.date}
                </p>
                <p>
                    {event.time}
                </p></div>
        </div>
    )
}


