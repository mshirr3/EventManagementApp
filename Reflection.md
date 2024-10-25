# Reflektion

## Kapitel 2 - Meaningful names

Att använda namn som beskriver vad funktionen, klassen eller vad som än namnges gör är viktigt för att kunna förstå koden. Namnen ska vara så pass tydliga och beskrivande att kommentarer ej krävs för förståelse. Förkortningar och namn som kan tolkas på olika sätt bör undvikas. Jag tycket det här kanske är den enklaste delen att följa även om det kan vara svårt att komma på namn ibland. Men belöningen av bra namn är omedelbart synlig.
![alt text](<Skärmbild (47).png>)

## Kapitel 3 - Functions

Det viktigaste med funktioner är att den endast har en roll, alltså att den endast gör en sak. Funktioner bör vara väl definierade, med namn som beskriver vad den gör. Command-query separation principen betonar att funktionen endast gör en sak, antingen gör någonting (som att ändra state på systemet) eller en query (returnera ett värde). Det här är definitivt en av de sakerna som jag inte tänkte på innan och jag upplever det mycket lättare att förstå och därmed underhålla koden.
![alt text](<Skärmbild (49).png>)

## Kapitel 4 - Comments

I denna kapitel var författaren väldigt kritisk till kommentarer, och påstod i princip att kommentarer tyder på brist i koden. Det här var något helt nytt för mig men när man lägger mer fokus på att implementera principerna från de tidigare kapitlen inser man snabbt dess vinkel. I en funktion som updateEvent hade jag tidigare haft med en kommentat som "function that updates event" vilket är helt onödigt när namnet beskriver exakt samma sak. Men ibland kan det var bra för förtydligande. som in min sortDates kommentar där jag förklarar att den sorterar från tidigaste till senaste datumet.

## Kapitel 5 - Formating

Bra formatering av koden är en viktig del i att öka läsbarheten för koden. Istället för att man får en massa långa rader utan indentering, kan man försöka hålla raderna korta och även indentera i olika satser. Om man har flera rader kan tomrader också vara bra för att det ska vara lättare att se att vissa rader kanske hör direkt ihop eller är inom en kategori.

![alt text](<Skärmbild (50).png>)

## Kapitel 6 Object and Data Structures

Ett objekt när man tänker objekt-orienterad programmering har vissa bitar av data och funktioner som manipulerar datan, de publika funktionerna fungerar som ett interface till användaren av objektet. Medans datastrukturer är mer som en samling av data utan någon logik för att manipulera det. Jag försökte kapsla in så mycket data jag kunde genom tex privata fält för att kontrollera hur klassen används utanför.

![alt text](<Skärmbild (51).png>)

## Kapitel 7 Error handling

Att använda exceptions istället för att returnera något gör det mycket tydligare för utvecklaren att se hur fel hanteras i koden. Författaren nämner också att undvika för många try-catch block då det gör koden mindre läsbar. Jag upplever själv att try-catches kan ibland ta fokuset över själva logiken i funktionen. Istället är det bättre att ha try-catches i en högre nivå i abstraktionen och fånga alla fel där.

## Kapitel 8 - Boundaries

I det här kapitelt nömner författaren hur viktigt det är att undvika externa beroenden då det kan orsaka problem i ens egna system om den externa parten ändras. Men det detta är i många fall svårt att följa men när man måste kan man se till att det externa biblioteket är regelbundet underhållen genom dess popularitet och nedladdningar. 

## Kapitel 9 . Unit Tests

Enhetstester är en oerhört viktig del under utveckligen av ett sustem. Att skriva bra tester som testar funktioner i många olika scenarion krävs för att upptäcka buggar och utveckla utefter det så att minskar riskerna för system-krasch. Enhetstesterna bör vara oberoende av varandra och endast testa en sak. Att strukturera testkoden lika bra som source code är något jag behöver träna mer på. Ju fler projekt jag utvecklar desto mer inser jag vikten av bra testkod.

## Kapitel 10 - Classes

I detta kapitel skriver författaren om hur klasser bör designas och struktureras för att gör koden begriplig och lättare att underhålla. Det ska vara tydligt vad en klass gör och dens roll i systemet. För att uppnå det bör man hålla klasserna korta och se till att de inte har för många ansvar. Jag brukar inte tänka så mycket på inkapsling förut då jag inte tänkte på att någon annan skulle kunna använda mitt system. Men när jag tänkte så insåg jag hur viktigt det var med inkapsling då man inte vill att vem som helst ska kunna ändra och manipulera data i sin klass.

## Kapitel 11 - Systems

Den här delen tycket jag är den svåraste att implementera. Att tänkte på systemet från ett helikopter-perspektiv och inte bara detaljer i enskilda klasser är ett måste för att utveckla kod av hög kvalitet. Att använda abstraktioner och gränssnitt i den högsta nivå av abstraktionen och sen neråt till detaljerna är ett bra sätt att strukturera enligt författaren men jag upplever det fortfarande lite krångligt.