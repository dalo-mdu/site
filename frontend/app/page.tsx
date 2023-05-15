import EventPreview from '@/components/event.component'
import client from '@/graphql/client';
import { LIST_EVENT } from '@/graphql/queries';
import { IEventAttributes, IEventInfo } from '@/types/types';
import Image from 'next/image'
import Link from 'next/link'





export default async function Home() {
  const { data: eventData } = await client.query({ query: LIST_EVENT })
  const events: IEventAttributes[] = eventData.events.data;

  //const { data: newsData } = await client.query({ query: LIST_NEW })
  //const news: INewAttributes[] = newsData.news.data;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full lg:min-h-[30rem] lg:flex-1">
      <div className='w-full lg:min-h-full lg:h-full lg:flex-1 flex lg:justify-center items-center flex-col mb-10 lg:mb-0'>
        <Image loading='lazy' quality={25} src="/logo_512.png" className='lg:w-1/3 w-1/2 mb-4 aspect-square' width={256} height={256} alt={''} />
        <div className='2xl:w-1/2'>
          <h1 className="font-medium flex items-center text-5xl ">
            Dalo
          </h1>

          <p>
            Här pluggar framtidens dataloger och annat schysst folk på Mälardalens Universitet.
          </p>
          <div className='flex justify-center gap-4 mb-2'>
            <Link href={'https://instagram.com/dalo_mdu'} className='px-1 py-2 flex  items-center gap-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 512 512">
                <path className='fill-black dark:fill-white' d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z" />
                <path className='fill-black dark:fill-white' d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z" />
                <circle className='fill-black dark:fill-white' cx="390.476" cy="121.524" r="30.23" />
              </svg>
              @dalo_mdu
            </Link>

            <Link href={'https://www.facebook.com/datalogiforeningen'} className='px-1 py-2 items-center gap-2 flex  '>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 40 40"  >

                <path className="dark:fill-white fill-black" d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z" />
                <path className="fill-white dark:fill-black" d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20  h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z" />
              </svg>
              Dalo
            </Link>

            <Link href={'https://github.com/dalo-mdu/'} className='px-1 py-2 items-center gap-2 flex  '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 97" className='h-4 w-4'>
                <path className="dark:fill-white fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" /></svg>
              dalo-mdu
            </Link>

          </div>
        </div>
        <Link href={'/about'} className='px-10 py-2 rounded-full  dark:bg-white dark:text-black bg-black text-yellow-50 font-medium flex mt-6 '>
          Läs Mer Om DALO
        </Link>
      </div>
      <div className='self-center flex flex-col items-center' >
        <h2 className='sm:text-3xl text-2xl'>
          Kommande Evenemang
        </h2>
        <div className="flex flex-col gap-2 w-full 2xl:w-1/2 mx-auto  p-4 items-center  rounded-lg pt-5">
          {
            events.slice(0, 3).map((event, index) => {
              return <EventPreview key={index} event={event} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export const revalidate = 60; 