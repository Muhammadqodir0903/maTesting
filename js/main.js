var elInp = document.querySelector(".inp");
var elInpp = document.querySelector(".inpp");
var elList = document.querySelector(".list");
var arr = [
    "DAMAS",
    "tico",
    "GENTRA",
    "cobalt",
];

function qoshish() {
    arr.push(elInpp.value)
    elInpp.value = ''

}

function myFn() {
    for (var i = 0; i < arr.length; i++) {
        if (elInp.value == "katta" && arr[i].toUpperCase() == arr[i]) {
            var newLi = document.createElement("li");
            newLi.textContent = arr[i];
            elList.appendChild(newLi);
        } else if (elInp.value == "kichik" && arr[i].toLowerCase() == arr[i]) {
            var newLi = document.createElement("li");
            newLi.textContent = arr[i];
            elList.appendChild(newLi);
        }
    }
    elInp.value = ''
   
}



