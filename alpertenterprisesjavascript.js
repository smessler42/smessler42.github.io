function calculate() {
const tables = parseInt(document.getElementById('tables').value);
const spotters = parseInt(document.getElementById('spotters').value);
let tpers = tables/spotters;
let tpersrem = tables%spotters;
let result = '';

if (tables % spotters !== 0){
    result += tpersrem + " spotters will have " + (Math.floor(tpers) +1) + " tables.";
    result += (spotters - tpersrem) + " spotters will have " + (Math.floor(tpers)) + " tables.";

} else {
    result = tpers + " tables per spotter.";
}
document.getElementById('result').innerHTML = result;
}

InputDeviceInfo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitbtn").click();
}
});
