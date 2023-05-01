import EventPreview from '@/components/event.component'
import client from '@/graphql/client';
import { LIST_EVENT } from '@/graphql/queries';
import { IEventAttributes, IEventInfo } from '@/types/types';
import Image from 'next/image'
import Link from 'next/link'





export default async function Home() {
  const { data } = await client.query({ query: LIST_EVENT })
  const events: IEventAttributes[] = data.events.data;

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full lg:min-h-full lg:flex-1">
        <div className='w-full lg:min-h-full lg:h-full lg:flex-1 flex lg:justify-center items-center flex-col mb-10 lg:mb-0'>
          <Image quality={25} src="/logo_512.png" className='lg:w-1/3 w-1/2 mb-4 aspect-square' width={256} height={256} alt={''} />
          <div className='2xl:w-1/2'>
            <h1 className="font-medium flex items-center text-5xl mb-4">
              Dalo
            </h1>
            <p>
              Här pluggar framtidens dataloger och annat schysst folk på Mälardalens Universitet.
            </p>
           
          </div>
          <Link href={'/about'} className='px-10 py-2 rounded-full  dark:bg-white dark:text-black bg-black text-yellow-50 font-medium flex mt-6 '>
            Läs Mer
          </Link>
        </div>
        <div className='self-center flex flex-col items-center' >
          <h2 className='text-3xl'>
            Kommande Evenemang
          </h2>
          <div className="flex flex-col gap-2 w-full 2xl:w-1/2 mx-auto  p-4 items-center  rounded-lg pt-10">
            {
            events.slice(0,3).map((event, index) => {
                return <EventPreview key={index} event={event} />
              })
            }
          </div>
      </div>
      </div>
  )
}

export const revalidate = 60; 