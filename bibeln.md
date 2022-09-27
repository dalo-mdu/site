---
main_class: "bibeln"
---
<div class="fr fw g8">
	<a class="song-link" href="#information">Info</a>
	<a class="song-link" href="#csn">CSN</a>
	<a class="song-link" href="#kåren">Kåren</a>
	<a class="song-link" href="#sånger">Sånger</a>
</div>

Och Homer sade:\
_**"Trying is the first step towards failure"**_, varpå han försökte skära sin stek.\
Kniven slant, och hans poäng var glasklar.

\-*DaLols BibEl: Homers Visdomsord 13:37*

## Förord

Rookien gör klokast i att omgående läsa och begrunda innehållet i detta häfte till ett lyckligt studentliv.

Sången är utan tvivel det främsta kännetecknet för en studentikos miljö.
Men vilken sång skall man ha till ölen, vinet eller punschen?


## Information

DALO är studentföreningen som tar hand om rookieperioden för de tre datainriktade programmen på skolan och drivs helt ideellt av studenter från de tre programmen.

Som ny på högskolan och på rookieperioden blir det svårt att hålla koll på allt som händer.
Rookiecrew rekommenderar att du går med i grupperna som rekommenderades i välkomstbrevet och följer DALO på sociala medier.

Med detta kommer ni enkelt kunna hitta era program kamrater, be om hjälp och vi kommer kunna informera er på ett smidigt sätt.

### ROOKIEN SKALL:

* Hitta MDH.
* Hitta på MDH.
* Aldrig ifrågasätta Phös.
* Alltid bära rookieslips.
* Alltid ha med sig Bib3ln.
* Delta i alla events för rookiens eget bästa.
* Leva vid orden "Närhet är kärlek"\
  Förutom vid eventuella pandemier...
* Ha kul

### Rookien skall icke:

* Inbilla sig att n0llan någonsin blir en etta.
* Ifrågasätta Phös

En n0lla är en student som har 0HP!

<!--(det är inte tänkt för att vara\
nedvärderande på något sätt! Däremot\
måste vi nu kalla n0llningen för rookieperiod\
för det låter trevligare och en n0lla ska\
heta rookie, om ni hör n0lla och tycker\
det är kränkande säg till din general\
eller någon i styrelsen!)-->

## CSN

Du måste klara 37HP (62.5%)\
för att få fortsatt CSN första året.\
Andra året så behöver du 45HP (75%).

Du får cirka 11 000kr varav 3 300kr är bidrag och resten är lån.
Beloppet kan variera beroende på om du tar tilläggslån eller har en "hög" inkomst.

Du kan se utbetalningsdatum på "mina sidor" på [__csn.se__](http://csn.se)

I januari är det en större summa och i maj är det en lägre summa!

Om något problem uppstår så kan man ringa till CSN:\
Telefon: 0771-276 000\
Måndag -> Fredag 9.00-15.00

**Glöm ej att lämna in studieförsäkran!**
{:.note}

## Kåren

Kåren är studenternas Mekka. Det är på Kåren du dagligen kommer köpa den legendariska baguetten.

Det är på Kåren du kommer hångla med ditt framtida ex.

Det är på Kåren du kommer bli alldeles för full, och ha alldeles för kul.

### Betala kårmedlemskap.
Du tjänar igen det på ca 3 Kårfester, 10 kaffe, 10 baguetter (dina två första veckor) och ser till att Kåren kan ha bättre fester.

DALO är föreningen som har lett Kårartoppen de senaste 7 åren.
_(Ettan förlora tvåan vann?)_{: style="font-size:0.8em;font-weight:500;"}


Kåren har dock inte vart öppen under coroan så lite oklart vad exakt som gäller nu...

***"N0llan som kårar belönas rikligt."***

# Sånger
***"Sjung hellre högt än bra"***

<div class="fr fw g8">
{% for song in site.songs %}
<a class="song-link" href="#{{ song.relative_path }}">{{ song.name }}</a>
{% endfor %}
</div>

{% for song in site.songs %}
<article class="song">
	<h1 id="{{ song.relative_path }}">{{ song.name }}</h1>
	{% if song.melody_link %}
	<h2>Melodi: <a target="_blank" href="{{ song.melody_link }}">{{ song.melody }}</a></h2>
	{% elsif song.melody %}
	<h2>Melodi: {{ song.melody }}</h2>
	{% endif %}
	<div class="song-text">{{ song.content }}</div>
</article>
{% endfor %}
