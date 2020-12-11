const practiceFile = [273.15];
let a = 42;
let b = "hello";
let c = false;

console.log(practiceFile);

practiceFile.push(a);
practiceFile.push(b);
practiceFile.push(c);

console.log(practiceFile)

const cargoHold = ["oxygen tanks","space suits", "parrot",
"instruction manual", "meal packs", "slinky", "securityblanket"];

/* removing and replacing slinky with space ether*/
cargoHold.splice(5,1,"space tether");

console.log(cargoHold);

/* remove last element(securityblank)*/
cargoHold.pop();
console.log(cargoHold);

/* remove the firs element(oxygen tanks)*/
cargoHold.shift();
console.log(cargoHold);

/* adding items 1138 at the  back and "20 meters"*/
cargoHold.unshift(1138);
cargoHold.push("20 meters");
console.log(cargoHold);