
let sayi1 = 49;
if (sayi1>10 && sayi1<50) {
    console.log("sayı 10-50 arasındadır.");
} else {
    console.log("sayı 10-50 arasında değildir.");
}

let sayi = 21;

if (sayi % 2 == 1 || sayi > 0)
{
    console.log("sayi pozitif tek sayıdır.");
}
let x = 60, y = 60, z = 60;

if (x > y && x > z) {
    console.log("x en büyük");
} else if (y > x && y > z) {
    console.log("y en büyük");
} else if (z > x && z > y) {
    console.log("y en büyük");
} else {
    console.log("sayılar eşit");
}

let vize1 = 10;
let vize2 = 10;
let final = 70;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

console.log("ortalamanız: " + ortalama);

if (ortalama >= 50) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız");
}
if (ortalama >= 50 && final >= 50) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız");
}

if (ortalama >= 50 || final >= 70) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız");
}