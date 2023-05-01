import client from "@/graphql/client";
import { GET_ABOUT } from "@/graphql/queries";
import ReactMarkdown from "react-markdown"


export default async function About() {
    const { data } = await client.query({ query: GET_ABOUT })
    const Content: any = data.about.data.attributes.mainContent; 
    

    return (
        <main className="max-w-2xl mx-auto mt-10 w-full">
            <h1 className="text-5xl mb-6">
                Om Dalo
            </h1>
            <ReactMarkdown className="prose dark:prose-invert mt-20 ">
                {Content}
            </ReactMarkdown>
        </main>)
}
export const revalidate = 60; 