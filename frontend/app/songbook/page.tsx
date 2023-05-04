"use client";
import SongText from '@/components/songText.component'
import client from '@/graphql/client';
import { LIST_SONG } from '@/graphql/queries';
import { ISongAttributes } from '@/types/types';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';




export default function Songbook() {
    //fetch songs

    const [loading, setLoading] = useState<boolean>(true);

    const [Songs,setSongs] = useState<ISongAttributes[]>([])
    const [showScroll, setShowScroll] = useState<boolean>(false)

    useEffect(() => {
        fetch('/api/songs').then(res => res.json()).then(data => 
        {
            setSongs(data.Songs)
            setLoading(false)
            
        })
    }, [])


    const checkScrollTop = () => {
        if (window.scrollY > 100) {
            setShowScroll(true)
        } else if (window.scrollY <= 100) {
            setShowScroll(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [setShowScroll])

    
    return (
        <div >
            <Transition 
                show={loading}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            
            >
                <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center'>
                    <svg className=" animate-spin -ml-1 mr-3 h-12 w-12 text-yellow-500 dark:text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>

                </div>
            </Transition>

            <div className='flex flex-col gap-10 items-center  max-w-5xl mx-auto ' >
                    <div className='flex md:gap-4 gap-2 flex-wrap justify-center'>
                        {Songs.map((song) => {
                            return (
                                <a className='py-2 px-4 md:px-8 dark:bg-neutral-900 text-sm md:text-lg bg-white/50 rounded-full border-yellow-500/10 border-2 ' href={`#${song.attributes.SongInfo.name}`} key={song.attributes.SongInfo.name}>{song.attributes.SongInfo.name}</a>
                            )
                        })}
                    </div>
                    {Songs.map((song) => {
                        return (
                            <SongText song={song.attributes.SongInfo} key={song.attributes.SongInfo.name}  />
                        )
                    })}
            </div>
            
            <Transition    
                show={
                   showScroll
                }
                className={"rounded-full dark:bg-neutral-900 bg-[#fffef8] border-yellow-500/10 border-2 shadow p-4 fixed bottom-5 right-5 ease-in-out"}
                as={'a'}
                enter="duration-300 transform"
                enterFrom="opacity-0  translate-y-4 "
                enterTo="opacity-100 translate-y-0 "
                leave="duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
                href='#'
            >
                       <ChevronUpIcon className='h-6 w-6' />
            </Transition>


        </div>)
}