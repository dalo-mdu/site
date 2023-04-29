import client from "@/graphql/client";
import { LIST_EVENT } from "@/graphql/queries";
import { IEventAttributes } from "@/types/types";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default async function Event({ params }: { params: { id: string } }) {
    // get id from url
    // get event from id
    const { data } = await client.query({ query: LIST_EVENT })
    const events: IEventAttributes[] = data.events.data;
    const event = events.find(event => event.attributes.info.name === decodeURI(params.id))


    return (
        <main className="max-w-6xl mx-auto mt-10 prose prose-invert">
            <h1>
                {event?.attributes.info.name}
            </h1>
                <ReactMarkdown>
                    {event?.attributes.info.info ?? ""}
                </ReactMarkdown>
        </main>)
}