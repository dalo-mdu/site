'use client'


import { Dialog, Transition } from '@headlessui/react'
import Personnummer from 'personnummer'
import { Fragment, useState } from 'react'
import Image from 'next/image'

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
                <h2 className="text-4xl">Rookieperioden</h2>
                <p>
                    Under rookieperioden går det att bli en Rookie-medlem i vår <a href="https://hitract.se/hitclub/1096">DALO Rookie-hitClub</a> på <a href="https://hitract.se">hitract</a>.
                    Där finns information om events som anordnas under rookieperioden. Att bli Rookie-medlem kostar ingenting och är bara till för att vi ska kunna nå ut med information till er.
                </p>
                <h2 className="text-4xl">Dalo</h2>
                <p>
                    Som medlem i Dalo har du möjlighet att vara med på sittningar och events som anordnas av Dalo under resten av studenttiden. Du har dessutom rätt att påverka verksamheten genom direkt engagemang samt röstning under årsmötet.
                </p>
                <p>
                    Medlemskapet har en medlemsavgift på 100kr och gäller livet ut.
                </p>
                
                <Image alt={''} loading='lazy' src="/hitract-logga.png" height={180} width={180} />
                <div className="flex">
                    <a href='https://apps.apple.com/se/app/hitract/id1494632863'><Image alt={''} loading='lazy' src="/appstore.png" height={150} width={500} /></a>
                    <a href='https://play.google.com/store/apps/details?id=se.hitract.hitract&hl=sv&gl=US&pli=1'><Image alt={''} loading='lazy' src="/playstore.png" height={150} width={500} /></a>
                </div>
                
                <h2 className="text-4xl">Hur blir jag medlem?</h2>
                <ol className="list-decimal">
                    <li>
                        Ladda ner hitract-appen och skapa ett konto
                    </li>
                    <li>
                        Hitta vår hitClub genom att söka på &rdquo;Dalo&rdquo;, eller besök <a href="https://hitract.se/hitclub/1075">den här länken</a> via webbläsaren på mobilen.
                    </li>
                    <li>
                        Tryck på &rdquo;Bli medlem&rdquo; och följ instruktionerna.
                    </li>
                    <li>
                        Klart! Du är nu medlem!
                    </li>
                </ol>
            </div>
        </main>)
    
}