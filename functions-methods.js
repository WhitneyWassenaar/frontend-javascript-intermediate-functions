// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

console.log('-------------Opdracht 1-------------');
/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// -------------Deze uitwerking is fout :(-------------
// Want ik gebruik hardcode, en het moet werken voor alle email adressen

// function getEmailDomain(email) {
//
//     const noviEduDomain = "novi-education";
//     const noviDomain = "novi.nl";
//     const outlookDomain = "outlook.com";
//     const noDomain = "Domain not found, try again."
//
//     if (email.includes("novi-education.nl")) {
//         return noviEduDomain;
//     } else if (email.includes("novi.nl")) {
//         return noviDomain;
//     } else if (email.includes("outlook.com")) {
//         return outlookDomain;
//     } else {
//         return noDomain;
//     }
// }
//
// const emailDomain = getEmailDomain("n.eeken@novi-education.nl");
// console.log(emailDomain);
// // of gewoon
// console.log(getEmailDomain("n.eeken@novi-education.nl"));

// -------------Deze uitwerking doet wel wat de opdracht vraagt.-------------

function getEmailDomain(email) {
    let parts = email.split("@"); // Door gebruik te maken van een split() methode, deel je de string in 2 array-items. Het karakter dat je in split() invoert is het punt van splitten.
    return parts[1]; // Een array start bij 0, als je een email-adres split op "@" dan heb je dus een deel voor de "@" en een deel na de "@". Je hebt de tweede deel nodig dus voer je index 1 in.
}
const emailDomain = getEmailDomain("a.wiersma@outlook.com");
console.log(emailDomain);

console.log('-------------Opdracht 2-------------');
/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {
    const employeeDomain = "novi.nl";
    const studentDomain = "novi-education.nl";
    let personType = "Extern";
    let domain = email.split("@");

    if (domain[1].includes(employeeDomain)) {
        personType = "Medewerker";
    } else if (domain[1].includes(studentDomain)) {
        personType = "Student";
    }
    return personType;
}
console.log(typeOfEmail("novi.nl.wiersma@outlook.com"));

console.log('-------------Opdracht 3-------------');
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

// Stappenplan:
// 1. [] @ (ik heb uitleg nodig) en . moeten op de juiste plek staan. de . moet altijd na de @ maar wel voor nl of com
// 2. [✔] Er mag geen , in de email staan dus er moet gebruikgemaakt worden van includes()
// 3. [✔] .mag niet als allerlaatste karakter voorkomen in een email. Ik zal dus de laatse karakter moeten aanspreken met -1 van een array van de email.

function checkEmailValidity(email) {
    if (!email.includes("@") || (email.includes(",") || (email[email.length - 1] === "."))) {
        return false;
    } else {
        return true;
    }
}
console.log(checkEmailValidity("n.eeken@n@ovi.nl"));