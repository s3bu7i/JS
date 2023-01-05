
"use strict";
        
let sonuc;

let gorevListesi = [
    {"id": 1, "gorevAdi": "Görev 1"},
    {"id": 2, "gorevAdi": "Görev 2"},
    {"id": 3, "gorevAdi": "Görev 3"},
    {"id": 4, "gorevAdi": "Görev 4"},
];

let ul = document.getElementById("task-list");

for(let gorev of gorevListesi) {

    let li = `
        <li class="task list-group-item">
            <div class="form-check">
                <input type="checkbox" id="${gorev.id}" class="form-check-input">
                <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
            </div>
        </li>
    `;
            
ul.insertAdjacentHTML("beforeend", li);           

}


// document.querySelector("#task-list").parentElement.remove();
// document.querySelector("#task-list").children[0].remove();
// document.querySelector("#task-list").children[1].remove();

// document.querySelector("#task-list").removeAttribute("class");
// document.querySelector("#task-list").children[1].removeAttribute("class");
// sonuc = document.querySelector("#task-list").children[1].getAttribute("class");
// document.querySelector("#task-list").children[1].setAttribute("class","aaa");
// sonuc = document.querySelector("#task-list").children[1].classList[1];
document.querySelector("#task-list").children[1].classList.add("bg-danger");
// document.querySelector("#task-list").children[1].classList.remove("bg-danger");
sonuc = document.querySelector("#task-list").children[1].classList.contains("bg-warning");
      

console.log(sonuc);
