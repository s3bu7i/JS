

let exc = ["exc1","exc2","exc3","exc4"];

console.log(exc.length);

// First and end element
console.log(exc[0]);   // exc1
console.log(exc[exc.length - 1]);   // exc4


console.log(exc.includes("exc1"));
console.log(exc.indexOf("exc1"));

// exc[exc.length] = "exc5";
exc.push("exc5");

console.log(exc)

exc.pop();
exc.pop();

console.log(exc)


let ogr1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [70,60,80]
];

let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
];

let ogr3 = [
    "Ahmet",
    "Turan",
    2009,
    [60,60,70]
];

let ogr = [ogr1, ogr2, ogr3];

let yigit_yas =  new Date().getFullYear() - ogr[0][2];
let ada_yas =  new Date().getFullYear() - ogr[1][2];
let ahmet_yas =  new Date().getFullYear() - ogr[2][2];

let yigit_not = (ogr[0][3][0] + ogr[0][3][1] + ogr[0][3][2]) / 3;
let ada_not = (ogr[1][3][0] + ogr[1][3][1] + ogr[1][3][2]) / 3;
let ahmet_not = (ogr[2][3][0] + ogr[2][3][1] + ogr[2][3][2]) / 3;

console.log(yigit_not.toFixed(1), ada_not.toFixed(1), ahmet_not.toFixed(1));

