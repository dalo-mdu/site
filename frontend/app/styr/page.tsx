import Styrcard from "@/components/styrcard";
import client from "@/graphql/client";
import { LIST_BOARD } from "@/graphql/queries";
import { IBoardAttributes } from "@/types/types";

export interface StyrelseMember {
    forename: string;
    surname: string;
    nickname?: string;
    role: string;
    image?: string;
}

const styrelse: StyrelseMember[] = [
    {
        forename: "Gustav",
        surname: "Kånåhols",
        nickname: "ELIT",
        role: "Kapten",
    },
    {
        forename: "Fredrik",
        surname: "Nygårds",
        nickname: "Hemköp",
        role: "Vice ordförande",
    },
    {
        forename: "Johan",
        surname: "Sandred",
        nickname: "Nisse",
        role: "Sekreterare",
    },
    {
        forename: "Martin",
        surname: "Söderman",
        nickname: "Fruit Ninja",
        role: "Kassör",
    },
    {
        forename: "Eric",
        surname: "Masser",
        nickname: "Huntly",
        role: "Materialansvarig",
    },
    {
        forename: "Robin",
        surname: "Fransson",
        nickname: "Mäster Sprut",
        role: "Ledamot",
    },
    {
        forename: "Erik",
        surname: "Isaksson",
        nickname: "Disco",
        role: "Ledamot",
    },
    {
        forename: "Victor",
        surname: "Herlin",
        nickname: "2,5",
        role: "Ledamot",
    },
    {
        forename: "Jonas",
        surname: "Sjöstrom",
        nickname: "Kite",
        role: "Suppleant",
    },
    {
        forename: "Oskar",
        surname: "Sturebrand",
        nickname: "Pippi",
        role: "Suppleant",
    },
    {
        forename: "Ivan",
        surname: "Hansson",
        nickname: "Grodan",
        role: "Suppleant",
    },
    {
        forename: "Patrick",
        surname: "Sjöö",
        nickname: "Void",
        role: "Suppleant",
    },
    {
        forename: "Mika",
        surname: "Pärssinen",
        nickname: "Stockholm",
        role: "Suppleant",
    }
]


export default async function Styrelse() {

    const { data } = await client.query({ query: LIST_BOARD })
    const board: IBoardAttributes[] = data.boardMembers.data;


    return (
        <main className="max-w-6xl mx-auto mt-10">
            <h1 className="text-5xl mb-6">
                DALOs Styrelse
            </h1>
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    board.map((member, index) => {
                       return <Styrcard key={index} info={member.attributes} />
                    })
                }
            </div>
        </main>)
}