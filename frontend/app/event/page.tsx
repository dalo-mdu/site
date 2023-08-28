import EventPreview from '@/components/event.component'
import client from '@/graphql/client';
import { LIST_EVENT } from '@/graphql/queries';
import { IEventAttributes, IEventInfo } from '@/types/types';


export default async function Event() {
    const { data: eventData }:{data:{events:{data:IEventAttributes[]}}} = await client.query({ query: LIST_EVENT })
    const events: IEventAttributes[] = eventData.events.data.filter((event) => {
      let now = new Date();
      now.setHours(0,0,0,0);
      let eventDate = new Date(event.attributes.info.date)
      eventDate.setHours(0,0,0,0);
      return eventDate >= now;
    }).sort((a, b) => {
      return new Date(a.attributes.info.date).getTime() - new Date(b.attributes.info.date).getTime()
    });
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
