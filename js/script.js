// //1.Destruct

// //Skriv en funktion som tar emot nedan objekt och loggar värdet av twitter och company. 


// const person = {
//     first: 'Elon',
//     last: 'Musk',
//     twitter: '@elonmusk',
//     company: 'Space X'
// }


// function logTwitterAndComp({ twitter, company }) {
//     console.log(twitter, company);
// }

// logTwitterAndComp(person);

// //2.Destruct

// // Skriv en funktion som tar emot nedan objekt och visar för- och efternamn i ett h1-element. 


// const person2 = {
//     first: 'Elon',
//     last: 'Musk',
//     twitter: '@elonmusk',
//     company: 'Space X'
// }

// function logFirstAndLast({ first, last }) {
//     const h1 = document.createElement("h1");
//     document.body.appendChild(h1);
//     h1.innerHTML = `${first} ${last}`;
//     console.log(first, last);
// }
// logFirstAndLast(person2);

// //3 - Destruct

// //Skriv en funktion som tar emot ett objekt (en vara) och ett nummer som anger antal. Funktionen har alltså två parametrar. Funktionen ska returnera det totala priset av varorna. Beror alltså på originalPrice och antalet.


// // const item = {
// //     name: 'Xbox One X',
// //     originalPrice: 499.99,
// // }


// // function logTotalPrice({originalPrice}, quantity){
// //     let totalPrice=originalPrice*quantity;
// //     console.log (totalPrice);
// // }

// // logTotalPrice(item, 13);

// //4 - Destruct

// //Skriv en funktion som tar emot ett objekt (en vara) och ett nummer som anger antal. Funktionen ska returnera det totala priset av varorna. Beror alltså på originalPrice, discount och antalet.


// const item2 = {
//     name: 'Xbox One X',
//     originalPrice: 499.99,
//     discount: 0.15
// }


// function logTotalPrice({ originalPrice, discount }, quantity) {
//     let totalPrice = originalPrice * discount * quantity;
//     console.log(totalPrice);
// }

// logTotalPrice(item2, 33);

// //5 - Destruct

// //Skriv en funktion som tar emot två objekt. Funktionen ska returnera ett objekt som innehåller förnamnet från person1 och efternamnet från person2. 


// const person3 = {
//     first: 'Anna',
//     last: 'Anka',
//     location: 'Malmö'
// }
// const person4 = {
//     first: 'Nick',
//     last: 'Cage',
//     location: 'Los Angeles'
// }


// function returnFirstAndLast({ first, last }) {
//     let firstAndLast = person3.first + " " + person4.last;
//     console.log(firstAndLast);
// }

// returnFirstAndLast(person3, person4);

// //6 - Destruct
// //Skriv en funktion som tar emot ett objekt. Funktionen ska returnera ett klonat objekt med en ny valfri egenskap. T.ex. location: ‘Malmö’.

// const person5 = {
//     first: 'Nicholas',
//     last: 'Cage',
// }

// const updatedPerson = { ...person5 };
// function returnClonedObject({ first, last, location }) {

//     updatedPerson.location = "Malmö";
//     console.log(updatedPerson);
// }

// returnClonedObject(updatedPerson);

// // 7 - Spread
// // Använd array-metoden splice och lägg ihop följande arrayer och spara i en fjärde. Den fjärde ska innehålla alla veckodagar i rätt ordning. 

// const arr1 = ['fre', 'lör', 'sön'];
// const arr2 = ['mån', 'tis'];
// const arr3 = ['ons', 'tors'];


// const arr4 = [...arr2, ...arr3, ...arr1];
// // const insert = arr4.splice();
// // const remove = arr4.splice
// // const shake2 = arr4.splice()

// console.log(arr4);

// //8 - Spread
// // Ändra arrayen year med hjälp av splice så att den innehåller alla årets månader i rätt ordning.

// const month1 = ['jan', 'feb'];
// const month2 = ['mar', 'apr', 'maj'];
// const month3 = ['sep', 'okt'];
// const year = ['jun', 'jul', 'aug', 'nov', 'dec'];


// console.log(year);

// year.splice(0, 0, ...month1);
// year.splice(2, 0, ...month2);
// year.splice(8, 0, ...month3);
// console.log(year);


// //9 - Bracket notation
// // Skapa ett tomt objekt och använd sedan variablerna nedan för att lägga till egenskaperna animal, name och continent. Välj själv vad de ska ha för värden.


// const prop1 = 'animal';
// const prop2 = 'name';
// const prop3 = 'continent';

// const theAnimals = {};

// theAnimals[prop1] = 'Dog';
// theAnimals[prop2] = 'Nelson';
// theAnimals[prop3] = 'Europe';

// console.log(theAnimals);


// // 10 - Bracket notation
// // Definiera en funktion som tar emot ett objekt och returnerar ett objekt där egenskapsnamnen och egenskapsvärdena är omvända. Använd Object.keys för att lösa uppgiften. Funktionen ska fungera för vilket objekt som helst. 

//_______________MITT EXEMPEL_______________________

// // Från
// const hej = {
//     animal: 'lion',
//     name: 'simba',
//     continent: 'africa',
//     ny: 'egenskap'
// }

// //   console.log(Object.keys(hej));


// // till
// const cevap = {
//     lion: 'animal',
//     simba: 'name',
//     africa: 'continent'
// }

// //   console.log(Object.keys(cevap));

// function returnObj(obj) {
//     const keyArray = Object.keys(obj);
//     console.log(keyArray);

//     const newObj = {};

//     newObj['egenskap'] = keyArray[0];
//     console.log(newObj);
// }



// returnObj(hej)
// returnObj(cevap)

//____________CLARAS EXEMPEL________________________

// 10 - Bracket notation
// Definiera en funktion som tar emot ett objekt och returnerar ett objekt där egenskapsnamnen och egenskapsvärdena är omvända. Använd Object.keys för att lösa uppgiften. Funktionen ska fungera för vilket objekt som helst. 


// const animalObj= {
//     animal: 'lion',
//     name: 'simba',
//     continent: 'africa',
//     sound: 'RAAWR'
// };

// function swapKeyValue(obj){
//     //ta emot ett bjekt
// const newObj = {};
// //newObj['lion'] = 'animal';
// console.log(newObj);

// const keyArray = Object.keys(obj);

// console.log(keyArray);

// //console.log(keyArray);
// keyArray.forEach(key => {

//     //const value = obj[key];
//     // newObj[value] = key;
//     console.log(obj[key]);
// })

// //returnerar ett objekt
// return newObj;
// }

// //anropar funktionen som returnerar en array med egenskaperna på objektet
// swapKeyValue(animalObj);

//___________________FETCH & DESTRUCTERING_____________________________________

// Listor på öppna API:er
// https://apilist.fun/collection/free-apis 
// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ 


// 1.2.Använd ett form i html:en. 
// Loopa igenom elementen i formuläret om de är fler än ett och spara ner alla input-värden i ett objekt.
// 3.Använd destructuring för att spara ner datan från API:et.
// 4.Visa datan i DOM:en
// 5.Visa ett error i DOM:en om något går fel.


//sparar ner alla input-värden i ett objekt:

// const formEl = document.querySelector('form');
// formEl.addEventListener('submit', event => {
//     event.preventDefault();
//     fetchDogImage();

//     const userInfo = {};

//     const inputElements = formEl.childNodes;
//     console.log(inputElements);

//     inputElements.forEach(node => {
//         if (node.name != null && node.name != '') {
//             console.log(node.name, node.value);

//             userInfo[node.name] = node.value;
//         }
//     })

//     // userInfo.name = document.querySelector('input').value;
//     console.log(userInfo);

// })

// const obj ={};
// obj.egenskap =  10;
// obj['en till egenskap'] = 99;

// const text = 'en tredje egenskap';
// obj[text]=87890;
// console.log(obj);


//______________________Exempel 1_______________________

// const url = `https://dog.ceo/api/breeds/image/random`;
// let button = document.getElementById("button");

// button.addEventListener("click", () => {
//     vovve();
// });

// function vovve() {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {


//             console.log(data);

//             const {message} = data;
//             console.log(message);

//             const img = document.createElement("img");
//             img.src = message;
//             document.body.append(img);
//         });


// }

//--------------

//_______________________Ett annat exempel_________________

// const url = `https://api.punkapi.com/v2/beers`;
// let button = document.getElementById("button");

// button.addEventListener("click", () => {
//   bear();
// });

// function bear() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);

//     const {description, id, name, tagline} = data[0];
//     console.log(description, id, name, tagline);

//     const reply = document.createElement("h1");
//     reply.innerText = description, id, name, tagline;
//     document.body.append(reply);
//     });

// }


//________________CHUCK NORRIS JOKES___________

// Chuck Norris jokes - https://api.chucknorris.io/ 
// Låt användaren söka på en kategori och hämta ett random skämt i den kategorin. Visa skämtet.


// const url = `https://api.chucknorris.io/jokes/random`;
// let button = document.getElementById('button');
// //Global variabel så att den nås av alla funktioner
// const joke = document.createElement("h1");
// button.addEventListener("click", () => {
//     fetchJoke();
// });

// function fetchJoke() {
//     fetch(url)
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data);

//             //Destructering:
//             const { value } = data;
//             console.log(value);

//             //Visar skämtet i DOM:en
//             joke.innerText= value;
//             document.body.append(joke);
//         })

//         .catch(error => console.log(error));

//         //Tömmer DOM:en på skämtet
//         joke.innerText = "";
// }

//_______________________PUNK API_________________________________

// Punk API - https://punkapi.com/documentation/v2 
// Låt en användare söka på öl genom att ange ett namn. Visa namn, bild och beskrivning för ett enda öl. 
// Låt en användare ange vilken mat som ska passa till ölen och sök fram öl som passar. Visa namnet för alla öl i svaret.
// Låt användaren välja ett datum och visa namnet på alla öl som har bryggts innan det datumet. 


//_________________________DOG API____________________________________


// Dog API - https://dog.ceo/dog-api/ 
// Låt användaren ange en hundras och antal bilder som ska hämtas.
// Visa alla bilder på webbsidan.
// Låt även användaren bestämma hur många bilder som ska hämtas. Tex 5 husky, 2 dalmatians osv.


const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const userSearch = {};

    const inputElements = form.childNodes;
    console.log(inputElements);

    inputElements.forEach(node => {
        if (node.name != null && node.name !== '') {
            console.log(node.name, node.value);

            userSearch[node.name] = node.value;
        }
    })


    console.log(userSearch);

    getDogImages(userSearch);

});

function getDogImages({ breed, amount }) {
    console.log(breed, amount);

    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;


    fetch(url)
        .then(response => response.json())
        .then(({ message }) => {
            console.log(message);

            // const { message } = data;
            // console.log(message);

            const img = document.createElement("img");
            img.src = message;
            document.body.append(img);

        })

        .catch(error => console.log(error));


}