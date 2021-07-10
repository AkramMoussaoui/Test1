// var grade = prompt("donner votre age");
// grade = parseFloat(grade);
// // if (age || age == 0) {
// //   console.log("votre est : ", age);
// // } else {
// //   console.log("Valeur erroné");
// // }

// // if (condition) {

// // } else {

// // }

// if (grade >= 90) {
//   console.log("Your grade is A");
// } else {
//   if (70 <= grade < 90) {
//     console.log("Your grade is B");
//   } else {
//     if (60 <= grade < 70) {
//       console.log("Your grade is C");
//     } else {
//       if (50 <= grade < 60) {
//         console.log("Your grade is D");
//       } else {
//         console.log("Your grade is F");
//       }
//     }
//   }
// }

// var age = 26;
// var chaine = "akram a " + age + " ans";
// var chaine2 = "akram";
// var chaine3 = `akram a ${age} ans`;

// console.log(chaine3);

// function add(a = 0, b = 0) {
//   return a + b;
// }

// // var add = function (a,b){
// //     return a + b;
// // }
// var c = "2";
// var d = 5;
// var result = add(c, d); // => add(2,5)

// console.log(result);

// function salaryWithBonus(salary, bonus, money = "£") {
//   if (
//     typeof salary != "number" ||
//     typeof bonus != "boolean" ||
//     typeof money != "string"
//   ) {
//     return "Wrong parameters";
//   }
//   if (bonus) {
//     salary = salary * 10;
//   }
//   return salary + money;
// }

// console.log(salaryWithBonus(100, true, "$")); //=> 1000$
// console.log(salaryWithBonus(30, false)); //=> 30£

// function initials(nom, prenom) {
//   return nom[0].toUpperCase() + "." + prenom[0].toUpperCase();
// }

// console.log(initials("moussaoui", "akram")); // => M.A
// var nombre = prompt("donner un nombre > 10");
// while (nombre < 10) {
//   var nombre = prompt("donner un nombre > 10");
// }
// do {
//   var nombre = prompt("donner un nombre > 10");
// } while (nombre < 10);
// console.log("suite du programme");

// var array = [12, "Amine", true];
// //           0    1       2
// var object = {
//   age: 12,
//   nom: "Amine",
//   inscrit: true,
//   greet: function () {
//     console.log("Bonjour" + this.nom);
//   },
// };
// object["cle"] = 258;
// console.log(object);
// object.greet();

// var adam = {
//   name: "Adam",
//   age: 18,
//   wasExpelledFromHeaven: true,
//   greet: function () {
//     return "Hi, my name is " + this.name;
//   },
// };

// var values = Object.values(adam);
// var keys = Object.keys(adam);

// console.log(values);
// console.log(keys);

// var b = prompt("Donner la base");
// b = parseFloat(b);

// var h = prompt("Donner la hauteur");
// h = parseFloat(h);

// var area = b * h * 0.5;

// alert(area);

// var i = 20;
// while (i < 11) {
//   console.log(i);
//   i = i + 1;
// }

// var i = 0;
// do {
//   console.log(i);
//   i = i + 1;
// } while (i < 11);

// for(var i = 0;i < 11;i = i + 1){
//     console.log(i);
// }

// var form = document.querySelector("form");
// form.style.color="red"
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var name = e.target.querySelector("input[name=name]");
//   var password = e.target.querySelector("input[name=password]");
//   if (name.innerText.length == 0) alert("name is required");
//   if (password.innerText.length < 5)
//     alert("password muist have 5 caracters at least");
// });

var btnPlus = document.querySelectorAll(".plus");

for (var btn of btnPlus) {
  btn.addEventListener("click", function (e) {
    var div = e.target.parentNode;
    var qty = div.querySelector(".quantite");
  });
}

paragraph.innerHTML = paragraph.innerHTML + 1;
