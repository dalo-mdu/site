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
        <main className="max-w-6xl flex lg:flex-row flex-col mx-auto mt-10 prose dark:prose-invert w-full">
            <div className="flex-1"><h1>
                {event?.attributes.info.name}
            </h1>

            <ReactMarkdown>
                {event?.attributes.info.info ?? ""}
                </ReactMarkdown>
            </div>
            <div>
                <div className="shadow-md rounded-md flex flex-col w-full lg:w-72 px-4 py-6 prose bg-white dark:bg-black  dark:border dark:border-white dark:prose-invert ">
                    <h3>Info</h3>
                    {event?.attributes.info?.date && (
                        <p className="mt-1 mb-1">
                            <>
                                
                                {new Date(event?.attributes.info?.date).toLocaleDateString("sv-SE", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                })
                                }
                            </>
                        </p>
                    )}
                    {event?.attributes.info?.date && (
                        <p className="mt-1 mb-1">
                            <>
                                {new Date(event?.attributes.info?.date).toLocaleTimeString("sv-SE", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </>
                        </p>
                    )}
                    {event?.attributes.info?.endDate && (<p className="my-0.5 font-bold">Till</p>)}
                     {event?.attributes.info?.endDate && (
                        <p className="mt-1 mb-1">
                            <>
                                
                                {new Date(event?.attributes.info?.endDate).toLocaleDateString("sv-SE", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                })
                                }
                            </>
                        </p>
                    )}
                    {event?.attributes.info?.endDate && (
                        <p className="mt-1 mb-1">
                            <>
                                {new Date(event?.attributes.info?.endDate).toLocaleTimeString("sv-SE", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </>
                        </p>
                    )}
                    {event?.attributes.info?.location ??
                        (
                        <p className="mt-2 mb-2">
                            {event?.attributes.info?.location}
                        </p>
                    )}

                    {event?.attributes.info?.cost && (
                        <p className="mt-2 mb-2">
                            Cost: <span className="font-bold">{event?.attributes.info?.cost}</span> kr
                        </p>
                    )}
                
                </div>
            </div>
          
        </main>)
}
export const revalidate = 60; 