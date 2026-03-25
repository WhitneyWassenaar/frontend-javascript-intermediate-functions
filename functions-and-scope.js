// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.
console.log('-------------Opdracht 1a-------------');
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht 1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

//-------------Stappenplan 1a-------------
// 1. Je wilt alle waarden in een array checken. Daarvoor gebruik je een for-loop. Ik schrijf dus eerst de standaard constructie van de for-loop.
// 2. Een array begint vanaf 0. De waarde wordt gecheckt met 'i' vanaf 0, tot de laatste item van de array.
// 3. Om te itereren tot de laatste array-item mag 'i' niet groter zijn dan de lengte van de array. Dus: i < grades.length; Er wordt geïtereerd met stapjes van 1, dus i++.
// 4. In de for loop schrijf ik een conditie die checkt of de array-item gelijk of hoger is dan 8.
// 5. Om bij te houden hoeveel array-items voldoen aan deze conditie, kunnen we deze waarden opslaan in een variabele. Dus elke keer dat een conditie 'true' is, wordt er += 1 opgeteld.
// 6. Als laatste schrijf ik een console.log() functie om het resultaat van de totale hoeveelheid studenten die Cum Laude zijn geslaagd te kunnen zien.

// * Ik check of iedere waarde van deze array 8 of hoger is door een if-statement te gebruiken. Als de waarde 8 of hoger is, tel 1 op in een variabele die staat voor het aantal cijfers die aan deze conditie voldoen
// * Als je de lengte van de array aanspreekt dan maakt het niet uit hoe lang een array is, als je i < array.length invoert in de for-loop, dan blijft de code itereren tot de laatste array-item
// * Zoals ik al eerder had vermeld houd je dat bij door daarvoor een variabele aan toe te wijzen, bijvoorbeeld: amountOfCumLaude = 0; en dan als de conditie true is, amountOfCumLaude += 1; binnen in de if-statement.

let amountOfCumLaude = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] === 8 || grades[i] > 8) {
        amountOfCumLaude += 1;
    }
}
console.log(amountOfCumLaude);

/*  1b: Omschrijven tot een herbruikbare functie   */
console.log('-------------Opdracht 1b-------------');
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(anyArray) {
    let amountOfCumLaude = 0;
    for (let i = 0; i < anyArray.length; i++) {
        if (anyArray[i] === 8 || anyArray[i] > 8) {
            amountOfCumLaude += 1;
        }
    }
    return amountOfCumLaude;
}
console.log(cumLaude(grades));


/* Opdracht  2: Gemiddeld cijfer */
console.log('-------------Opdracht 2a-------------');
/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorg ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//-------------Stappenplan 2a-------------
// 1. Je wilt alle waarden in een array bij elkaar optellen. Je zal dan een for-loop moeten gebruiken om langs elke waarde in de array langs te gaan.
// 2. Je wil het totaal van alle waarden in een array ergens opslaan, dat zal dus in een variabele moeten. Ik declareer de variabele buiten de for loop omdat ik de variabele ook bij de volgende opdracht nodig heb
// 3. Je wil ook het gemiddelde in een variabele opslaan, dus ik declareer daarvoor ook een variabele, ook buiten de for-loop.
// 4. In de for-loop tel ik bij elke iteratie de waarde van de array op.
// 5. In de for-loop bereken ik het gemiddelde van het totaal door (totale hoeveelheid / array.length) en sla het op in een variabele
// 6. Ik log de variabele waar het gemiddelde in is opgeslagen buiten de for loop

//* Een gemiddelde wordt berekend door het totaal te delen door de hoeveelheid waarden die bij elkaar is opgeteld
//* Ik verzamel array-items, die elk een waarde bevatten, die ik aanspreek met array[i]
//* Als je de lengte van de array aanspreekt dan maakt het niet uit hoe lang een array is, als je i < array.length invoert in de for-loop, dan blijft de code itereren tot de laatste array-item


let totalGrade = 0;
for (let i = 0; i < grades.length; i++) {
    totalGrade += grades[i];
}
averageGradeNumber = totalGrade / grades.length;
console.log(averageGradeNumber);


/* 2b: Omschrijven tot een herbruikbare functie */
console.log('-------------Opdracht 2b-------------');
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4

function averageGrade(anyArray) {
    let averageGradeNumber = 0;
    let totalGrade = 0;

    for (let i = 0; i < anyArray.length; i++) {
        totalGrade += anyArray[i];
        averageGradeNumber = totalGrade / anyArray.length;
    }
    return averageGradeNumber.toFixed(2);
}

console.log(averageGrade(grades));

/* 2c: Afronden op twee decimalen */
console.log('-------------Opdracht 2c-------------');
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
console.log('-------------Toegepast op opdracht 2b-------------');
//Toegepast op opdracht 2b


/* Bonusopdracht: hoogste cijfer */
console.log('-------------Opdracht 3a-------------');
/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
