//                                    string                                          //

//                                   Concat()

let fname="Aqib";
let lname=" Javed";
console.log(`Full Name: ${fname.concat(lname)}`);

// //                                  IndexOf()                                   //

let str1="My city is Talagang.";
console.log(str1.indexOf("Talagang"));

// //                                  lastIndexOf()                                   //

let str2="My city is Talagang. Talagang is new District.";
console.log(str2.lastIndexOf("Talagang"));

// //                                  charAt()                                   //

let str3="My city is Talagang. Talagang is new District.";
console.log(str3.charAt("i"));

//                              Naming Convention
// camel Case    : fullName
// pascal Case   :  fullName
// snake  Case   :  full_name

//                                        other useful methods                               //

let city="Talagang";
console.log(city.toUpperCase());
console.log(city.toLowerCase());
console.log(city.replace('T','t'));

let str = "aqibjaved5201@gmail.com";
let splittedString = str.split(".");
console.log(splittedString[1]);

