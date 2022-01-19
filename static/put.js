import { str2seed } from "./str2seed.js";

function send(event) {
    let error = document.getElementById("error");
    let seed = document.getElementById("seed").value;
    seed = seed.toUpperCase();
    console.log(str2seed(seed.substring(0, 4) + " " + seed.substring(4, 8)));
    if (str2seed(seed.substring(0, 4) + " " + seed.substring(4, 8)) == 0) {
        error.innerHTML = 'Invalid seed';
        return false;
    }
    error.innerHTML = '';
    return true;
}

document.getElementById("seedForm").onsubmit = send;