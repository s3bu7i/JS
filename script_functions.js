
function wordtime(word, time){
    for(let i =0;i<time;i++){
        console.log(word);
    }
}

wordtime("iwbenfu",5);

function rectangle(length, width){
    let area = length * width;
    let perimeter = (length + width) * 2;

    return `area: ${area} perimetre: ${perimeter}`
}

let result = rectangle(34,55);

console.log(result);

function writingtour(){
    let random = Math.random();

    if (random < 0.5){
        console.log("writing");
    }
    else{
        console.log("tour");
    }
    console.log(random);
}

writingtour();

function tamBolenler(sayi){
    let sayilar = [];

    for (let i =2; i<sayi; i++){
        if(sayi %i ==0){
            sayilar.push(i);
        }
    }
    return sayilar;

}

console.log(tamBolenler(5040));


function toplam() {
    let sonuc = 0;

    for(let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }

    return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));   
console.log(toplam(2, 5, 7, 10));
