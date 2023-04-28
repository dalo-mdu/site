import EventPreview, { Event } from '@/components/event.component'
import Image from 'next/image'
import Link from 'next/link'

const mockEvents: Event[] = [
  {
    title: 'Grillning',
    text: 'Hamburar och korv',
    date: '2021-09-01',
    time: '12:00',
    location: 'Parkeringsplatsen',

  },
  {
    title: 'Fake Event 1',
    text: 'Fake Event Text 1',
    date: '2021-09-04',
    time: '12:00',
    location: 'MDU'
  }
]



export default function Home() {
  return (
    <div className=" h-full min-h-full flex-1     flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-full flex-1">
        <div className='w-full h-full min-h-full flex justify-center items-center flex-col'>
          <Image src="/logo_512.png" className='lg:w-1/3 w-1/2 mb-4' width={512} height={512} alt={''} />
          <div className='2xl:w-1/2 '>
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
        <div className='self-center' >
          <h2 className='text-3xl'>
            Kommande Evenemang
          </h2>
          <div className="flex flex-col gap-2 w-full 2xl:w-1/2 mx-auto  p-4 items-center  rounded-lg pt-10">
            {
              mockEvents.map((event, index) => {
                return <EventPreview key={index} event={event} />
              })
            }
          </div>
      </div>
      </div>
      </div>
  )
}
