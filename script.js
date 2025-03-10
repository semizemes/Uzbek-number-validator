const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


clear.addEventListener("click", () => {
    input.value = "";
    results.innerHTML = '';
});

check.addEventListener("click", () => {
    const num = input.value.trim();
    if(num === ""){
       return alert("Please provide a phone number");
    } 
        return checkNumber(num);
    
});

input.addEventListener('keydown', e => {
    const num = input.value.trim();
    if(num === "" && e.key === 'Enter'){
        return alert("Please provide a phone number");
     } else if (e.key === 'Enter'){
        checkNumber(num);
        return;
     }
});



const checkNumber = (num) => {
    const regex = /^1?\s?(\(\d{3}\)|\d{3})[- \s]?\d{3}[- \s]?\d{4}$/;
    const test = regex.test(num);


    if(test === true){
        results.innerHTML += `Valid US number: <br> ${num} <br>`;
        results.classList.add("valid");
    } else {
        results.innerHTML += `Invalid US number: <br> ${num} <br>`;
        results.classList.add("invalid");
    }

    return;
};


console.log(typeof input.value)