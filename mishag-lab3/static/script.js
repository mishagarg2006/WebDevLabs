const x = 5;
const y = 7;
const z = x + y;
console.log(z);
const A = "Hello ";
const B = "world!";
const C = A + B;
console.log(C);

function SumNPrint(x1, x2){
    const x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z){
    console.log(C);
}
else if (C.length < z){
    console.log(z);
}
else {
    console.log("good job!")
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr){
//     arr.forEach(isBanana());
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == "Banana"){
//             alert("found the banana in " + i);
//         }
//     }
// }

function isBanana(item){
    if (item == "Banana"){
        alert("We found a banana in the first array");
    }
}

function findTheBanana(arr){
    arr.forEach(isBanana);
}

findTheBanana(L1);
findTheBanana(L2);

function greetingFunc(){
    const d = new Date();
    const h = d.getHours();
    if (h >= 5 && h < 12){
        if(window.location.href.includes("index.html")){
            document.getElementById("heading").innerHTML = "Good morning, I am Misha";
        }
    }
    if (12 <= h && h < 18){
        if(window.location.href.includes("index.html")){
            document.getElementById("heading").innerHTML = "Good afternoon, I am Misha";
        }
    }
    if (18 <= h && h < 20){
        if(window.location.href.includes("index.html")){
            document.getElementById("heading").innerHTML = "Good evening, I am Misha";
        }
    }
    if ((20 <= h && h < 24) || (0 < h && h < 5)){
        if(window.location.href.includes("index.html")){
            document.getElementById("heading").innerHTML = "Good night, I am Misha";
        }
    }
}

greetingFunc();