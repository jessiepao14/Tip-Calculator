calculateTip = () => {
    var billAmt = document.getElementById("billamt").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("numPeople").value;

    //validate input
    if (billAmt === '' || serviceQuality == 0 ) {
        alert("Please enter values");
        return;
    }

    if (numPeople === '' || numPeople <= 1) {
        numpeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    var total = (billAmt * serviceQuality) / numPeople;
    total = Math.round(total *100) / 100;
    total = total.toFixed(2);

    document.getElementById("tipTotal").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("tipTotal").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
};