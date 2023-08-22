import Image from 'next/image'
import './newstudentstyle.css'

export default function New() {
    return (
        <main className="max-w-2xl mx-auto mt-10 w-full">
            <h1 className="text-5xl mb-6">
                Ny Student
            </h1>
            <div className="flex flex-col gap-5 text-lg ">
                <p>
                    Kul att du har valt att börja studera på MDU och välkommen till Dalo!
                </p>

                <h2 className="text-3xl">Information</h2>
                <p>Dalo är studentföreningen som tar hand om rookieperioden för de tre datainriktade programmen på skolan och drivs helt ideellt av studenter från de tre programmen.</p>
                <p>Som ny på högskolan och på rookieperioden blir det svårt att hålla koll på allt som händer.
                    Rookiecrew rekommenderar att du går med i grupperna som rekommenderades i välkomstbrevet och följer Dalo på sociala medier.</p>
                <p>Vi organiserar saker främst med hjälp av <a style={{ color: "yellow" }} href="https://hitract.se">hitract</a>. Där går det att hitta vårt medlemskap, kommunikation och events som pågår under rookieperioden. Vår hitClub går att hitta <a style={{ color: "yellow" }} href="https://hitract.se/hitclub/1075">här</a>. <strong>Där kan ni bli en rookie-medlem i en DALO Rookie-club som vi kommer använda för att organisera rookieperioden</strong>. Mer information om vad hitract är och hur det fungerar finns <a href="#hitract" style={{ color: "yellow" }}>här</a>.</p>

                <p>Med detta kommer ni enkelt kunna hitta era programkamrater, be om hjälp och vi kommer kunna informera er på ett smidigt sätt.</p>
                <h3 className="text-2xl"><em>Rookien skall</em></h3>
                <ul style={{ listStyle: "outside" }}>
                    <li>Hitta MDU.</li>
                    <li>Hitta på MDU.</li>
                    <li>Aldrig ifrågasätta Phös.</li>
                    <li>Alltid bära rookieslips.</li>
                    <li>Alltid ha med sig Bib3ln.</li>
                    <li>Delta i alla events för rookiens eget bästa.</li>
                    <li>Leva vid orden &rdquo;Närhet är kärlek&rdquo;<br />Förutom vid eventuella pandemier...</li>
                    <li>Ha kul</li>
                </ul>
                <h3 className="text-2xl"><em>Rookien skall icke</em></h3>
                <ul style={{ listStyle: "outside" }}>
                    <li>Inbilla sig att n0llan någonsin blir en etta.</li>
                    <li>Ifrågasätta Phös</li>
                </ul>
                <p>En n0lla är en student som har 0HP!</p>

                <h2 className="text-3xl">CSN</h2>
                <p>Du måste klara 37HP (62.5%) för att få fortsatt CSN första året. Andra året så behöver du 45HP (75%).</p>
                <p>Du får cirka 11 000kr varav 3 300kr är bidrag och resten är lån.
                    Beloppet kan variera beroende på om du tar tilläggslån eller har en &rdquo;hög&rdquo; inkomst.</p>
                <p>Du kan se utbetalningsdatum på &rdquo;mina sidor&rdquo; på <a style={{ color: "yellow" }} href="http://csn.se"><strong>csn.se</strong></a></p>
                <p>I januari är det en större summa och i maj är det en lägre summa!</p>
                <p>Om något problem uppstår så kan man ringa till CSN:<br />
                    Telefon: 0771-276 000<br />
                    Måndag -&gt; Fredag 9.00-15.00</p>
                <p><strong>Glöm ej att lämna in studieförsäkran!</strong></p>

                <h2 className="text-3xl">Kåren</h2>
                <p>Kåren är studenternas Mekka. Det är på Kåren du dagligen kommer köpa den legendariska baguetten.</p>
                <p>Det är på Kåren du kommer hångla med ditt framtida ex.</p>
                <p>Det är på Kåren du kommer bli alldeles för full, och ha alldeles för kul.</p>
                <h3>Betala kårmedlemskap.</h3>
                <p>Du tjänar igen det på ca 3 Kårfester, 10 kaffe, 10 baguetter (dina två första veckor) och ser till att Kåren kan ha bättre fester.</p>

                <h2 className="text-3xl" id="hitract">Dalo på hitract</h2>
                <h3 className="text-2xl">Allt du behöver samlat på ett ställe</h3>
                <p>På <a style={{ color: "yellow" }} href="https://hitract.se">hitract</a> hittar du Dalos medlemskap, kommunikation, events & eventsbiljetter. Du kan dessutom connecta med andra studenter på MDU och andra skolor runt om i landet.</p>
                <h3 className="text-2xl">På hitract kan du:</h3>
                <div className="hitract-grid">
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-1.png" />Bli kompis med andra studenter</div>
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-2.png" />Bli medlem i föreningar på campus</div>
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-3.png" />Hitta kommande events på campus</div>
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-4.png" />Köpa biljetter till events</div>
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-5.png" />Connecta med studenter från hela Sverige</div>
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-6.png" />Visa vem du är</div>
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-7.png" />Bli hittad av drömarbetsgivaren</div>
                    <div><Image alt={''} loading='lazy' src="/hitract-bild-8.png" />Se & hitta dina kurser</div>
                </div>

                <Image alt={''} loading='lazy' src="/hitract-studenter.png" />
                <h4>
                    <strong>
                        Allt du behöver under din studietid!
                    </strong>
                </h4>
                <ul>
                    <li>Hitta och connecta med studenter från MDU och från andra skolor</li>
                    <li>Hitta kursare på campus och se alla dina nuvarande och kommande kurser</li>
                </ul>
                <Image alt={''} loading='lazy' src="/hitract-studentföreningar.png" />
                <h4>
                    <strong>
                        Hitta alla Dalos events och aktiviteter
                    </strong>
                </h4>
                <ul>
                    <li>Bli medlem i/följ Dalo för att alltid hålla koll på all vår medlemskommunikation, events och aktiviteter</li>
                    <li>Hitta andra studentföreningars events och köp biljetter i appen</li>
                    <li>Köp merch och andra produkter direkt på hitract!</li>
                </ul>
                <Image alt={''} loading='lazy' src="/hitract-arbetsgivare.png" />
                <h4>
                    <strong>
                        Drömarbetsgivaren hittar dig
                    </strong>
                </h4>
                <ul>
                    <li>På hitract finns även arbetsgivare som är där för att connecta med dig baserat på vad du pluggar, dina passioner och intressen</li>
                    <li>Arbetsgivare hittar dig på hitract istället för att du ska söka upp dom. Så var dig själv, gör din grej så löser det sig!</li>
                </ul>
                <h4>
                    <strong>
                        Hur hittar jag Dalo på hitract?
                    </strong>
                </h4>
                <ol>
                    <li >
                        Ladda ner hitract appen och skapa ett konto
                        <div className="appstore-links">
                            <a href='https://apps.apple.com/se/app/hitract/id1494632863'><Image alt={''} loading='lazy' src="appstore.png" /></a>
                            <a href='https://play.google.com/store/apps/details?id=se.hitract.hitract&hl=sv&gl=US&pli=1'><Image alt={''} loading='lazy' src="playstore.png" /></a>
                        </div>
                    </li>
                    <li>Hitta vår hitClub genom att söka på &rdquo;Dalo&rdquo;, eller <a style={{ color: "yellow" }} href="https://hitract.se/hitclub/1075">klicka på den här länken</a></li>
                    <li>Bli medlem i Dalo</li>
                </ol>

                <h4>
                    <strong>
                        Har du frågor eller funderingar?
                    </strong>
                </h4>

                <p>Kontakta hitract direkt via <a style={{ color: "yellow" }} href="mailto:info@hitract.se">info@hitract.se</a> eller <a style={{ color: "yellow" }} href="https://www.instagram.com/hitract/">@hitract</a> på Instagram.</p>
            </div>
        </main>)
}
export const revalidate = 60; 