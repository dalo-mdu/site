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


    
    return (
        <main className="max-w-2xl mx-auto mt-10 w-full">
            <h1 className="text-5xl mb-6">
                Bli medlem
            </h1>
            <div className="flex flex-col gap-5 text-lg ">
                <p>
                    Just nu håller vi på att byta medlemssystem, så vi kan inte ta emot nya medlemmar. Vi hoppas att det ska vara klart snart!
                </p>

            </div>
        </main>)
    
}