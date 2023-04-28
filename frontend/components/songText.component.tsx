import ReactMarkdown from "react-markdown";

export interface Song{
    title: string;
    text: string;
    melody?: string;
    writer?: string;
    notes?: string;
}

interface SongTextProps {
    song: Song;
}


export default function SongText({ song }: SongTextProps) {
    return (
        <div className=" p-4  bg-white dark:bg-neutral-900  shadow-2xl rounded-lg border-yellow-300/10 border-2 w-full" id={song.title}>
            <h1 className="text-3xl mb-4">{song.title}</h1>
            {song.melody && <h2 className="text-sm font-bold">{song.melody}</h2>}
            {song.writer && <h3 className="text-xs">{song.writer}</h3>}
            {song.notes && <h4 className="text-base text-neutral-400 ">{song.notes}</h4>}
            <ReactMarkdown className="mt-6"  components={{
                pre: 'p',
                p: ({ node, ...props }) => <p {...props} className="dark:text-yellow-50 mb-2" />
                

                
            }} >{song.text}</ReactMarkdown>
        </div>
    )
}


