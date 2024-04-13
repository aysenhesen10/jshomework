// let seciciler = [
//     {name:'Bob', age: 30, voted: true},
//     {name:'Jake', age: 32, voted: true},
//     {name:'Kate', age: 25, voted: false},
//     {name:'Sam', age: 20, voted: false},
//     {name:'Phil', age: 21, voted: true},
//     {name:'Ed', age: 55, voted: true},
//     {name:'Tami', age: 54, voted: true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//   ];
  
//   let totalVoted = seciciler.reduce((acc, value) => {
//     return value.voted ? acc + 1 : acc;
//   }, 0);
  
//   console.log(totalVoted);

// task2

// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//     ];
//    let totalPrice = wishlist.reduce((acc,value) => acc +(value.price),0);
//    console.log(totalPrice);

// task3

// function enUzunSozuTap(str) {
//     let sozler = str.split (' ');

//     let uzunSoz = ' ';


//     for (let i = 0; i< sozler.length; i++) {
//         if (sozler[i].length >uzunSoz.length) {
//             uzunSoz = sozler[i];
            
//         }
        
//     }
//     return uzunSoz;
// }
//    let inputString = 'Web Development Tutorial';
//    let uzunSoz = enUzunSozuTap (inputString);
//    console.log(uzunSoz);

// task4

// let sozler = "salam sabahiniz xeyir"
// function words(sozler) {
//     let cumle = sozler.split (' ')
//     let kelime =""
//     for (let i = 0; i < cumle.length; i++) {
//         sozler [i]=sozler [i][0].toUpperCase()+sozler[i].slice(1)
//         kelime = kelime+sozler[i]+" "
        
//     }
//     return kelime 
    
// }
// console.log(words (sozler));















// task5

// function kesmek(str,numWords) {
//     let words= str.split (' ');

//     let sozleriKesmek= [];

//     for (let i = 0; i < numWords  && i < words.length; i++) {
//         sozleriKesmek.push(words[i]);
       
//     }
//    let result = sozleriKesmek.join(' ');

//     return result;
    
// }
// let inputString = 'The quick brown fox jumps over the lazy dog';
// let numWords = 4;
// let sozleriKesenString = kesmek(inputString,numWords);
// console.log(sozleriKesenString);


  
 

    