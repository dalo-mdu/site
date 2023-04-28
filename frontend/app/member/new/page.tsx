'use client'


import { Dialog, Transition } from '@headlessui/react'
import Personnummer from 'personnummer'
import { Fragment, useState } from 'react'

export default function Songbook() {

    const [submitted, setSubmitted] = useState(false)

    const handleInitStep = (e: any) => {
        
        e.preventDefault()
        const form = e.target
        const data = {
            name: form.name.value,
            surname: form.surname.value,
            pnr: form.pnr.value,
            email: form.email.value,
            tel: form.tel.value,
            start: form.start.value,
            discord: form.discord.value
        }
        //show error message for field if not valid
        console.log(Personnummer.valid(data.pnr), data.pnr)
        if (!Personnummer.valid(data.pnr)) {
            e.target.pnr.setCustomValidity("Personnummret är inte giltigt");
            return
        }
        setSubmitted(true)
        //clear form
        form.name.value = ''
        form.surname.value = ''
        form.pnr.value = ''
        form.email.value = ''
        form.tel.value = ''
        form.start.value = ''
        form.discord.value = ''

    }

    return (<div className='flex justify-center items-center h-full flex-1'>
        <form className='ring-yellow-500' onSubmit={handleInitStep}>
            <h1 className='text-3xl font-bold mb-4'>Ny Medlem</h1>

            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col '>
                        <label htmlFor='name'>Förnamn</label>
                        <input required className='rounded-lg' placeholder='Förnamn' type='text' name='name' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor='surname'>Efternamn</label>
                        <input required className='rounded-lg' placeholder='Efternamn' type='text' name='surname' />
                    </div>
                    
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor='pnr'>Personummer</label>
                    <input required className='rounded-lg' placeholder='nnnnnn-xxxx' type='text' name='pnr' onChange={ e=>e.target.setCustomValidity('')} />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor='email'>Email</label>
                    <input required className='rounded-lg' placeholder='geten@dalo.se' type='email' name='email' />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor='phone'>Telefon</label>
                    <input className='rounded-lg' type='text' placeholder='07x-xxx xx xx' name='tel' />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor='start'>Terminstart</label>
                    <input className='rounded-lg' placeholder='HT-20' type='text' name='start' />
                </div>          
                <div className='flex flex-col w-full'>
                    <label htmlFor='discord'>Discord</label>
                    <input className='rounded-lg' placeholder='Dalo#0000' type='text' name='discord' />
                </div>
                <input className='rounded-lg bg-yellow-400 w-full py-3 mt-5 cursor-pointer text-yellow-900 hover:bg-yellow-500 shadow border-yellow-300 border transition-colors' type='submit' value='Gå vidare'   />
            </div>
        </form>
        <Transition appear show={submitted} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setSubmitted}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Tack för din ansökan!
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Vi kommer att kontakta dig så fort vi kan.
                                    </p>
                                </div>

                                <div className="mt-4 self-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                                        onClick={()=>setSubmitted(false)}
                                    >
                                        Stäng
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    </div>)
}