import Styrcard from "@/components/styrcard";
import client from "@/graphql/client";
import { LIST_BOARD } from "@/graphql/queries";
import { IBoardAttributes } from "@/types/types";




export default async function Styrelse() {

    const { data } = await client.query({ query: LIST_BOARD })
    const board: IBoardAttributes[] = data.boardMembers.data;


    return (
        <main className="max-w-6xl w-full mx-auto mt-10">
            <h1 className="text-5xl mb-6">
                Styrelse
            </h1>
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                {
                    board.map((member, index) => {
                       return <Styrcard key={index} info={member.attributes} />
                    })
                }
            </div>
        </main>)
}
export const revalidate = 60; 