"use client";
import SongText from '@/components/songText.component'
import client from '@/graphql/client';
import { LIST_SONG } from '@/graphql/queries';
import { ISongAttributes } from '@/types/types';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';




export default function Songbook() {
    //fetch songs
    useEffect(() => {
        fetch('/api/songs').then(res => res.json()).then(data => 
        {
            setSongs(data.Songs)
        })
    }, [])

    const [Songs,setSongs] = useState<ISongAttributes[]>([])
    const [showScroll, setShowScroll] = useState<boolean>(false)
    const checkScrollTop = () => {
        console.log(window.scrollY)
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
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                    <a href='#' className='rounded-full bg-white dark:bg-neutral-700 shadow p-6 fixed bottom-4 right-4'>
                       <ChevronUpIcon className='h-6 w-6' />
                    </a>
            </Transition>


        </div>)
}