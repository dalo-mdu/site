import EventPreview from '@/components/event.component'
import client from '@/graphql/client';
import { LIST_EVENT } from '@/graphql/queries';
import { IEventAttributes, IEventInfo } from '@/types/types';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'


export default async function Event() {
    const { data: eventData } = await client.query({ query: LIST_EVENT })
    const events: IEventAttributes[] = eventData.events.data;
    return (
        <div className="flex flex-col gap-2 w-full 2xl:w-1/2 mx-auto  p-4 items-center  rounded-lg pt-5">
            {
                events.map((event, index) => {
                    return <EventPreview key={index} event={event} />
                })
            }
        </div>
)
}
