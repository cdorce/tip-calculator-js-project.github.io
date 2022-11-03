
function calculateTip(){
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //Validation

    if(billAmount === "" || serviceQuality == 0 ) {
        window.alert("Please enter some values");
        return; //this will stop the function

    }

    if (numPeople ==="" || numPeople <=1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none"
    } else {
        document.getElementById("each").style.display = "block"

    }
    //do the math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) /100;
    total = total.toFixed(2);
    //Display text
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//hide the tip amount on load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display = "none";

//Click button to call the function

document.getElementById("calculate").onclick = function() {
    calculateTip();
}