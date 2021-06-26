const addBtnEl = document.getElementById("addBtn");
const resultDisplayEl = document.getElementById("resultDisplay");
const subBtnEl = document.getElementById("subBtn");

let curVal = 0;


subBtnEl.addEventListener('click', function() {
    console.log("click sub");
    curVal--;
    resultDisplayEl.innerHTML = curVal--;
})


addBtnEl.addEventListener('click', function() {
    console.log('click add');
    curVal++;
    resultDisplayEl.innerHTML = curVal;
});