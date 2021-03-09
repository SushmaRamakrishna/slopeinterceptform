let b = 0;
function findtheslope()
{
    let m = document.getElementById("slopem").value;
    let x = document.getElementById("pointx").value;
    let y = document.getElementById("pointy").value;

    document.getElementById("slopeStep1").innerHTML = "Slope formula is y = " + m + "x + b";
    document.getElementById("slopeStep2").innerHTML = y + " = " + (m * x) + " b";
    document.getElementById("slopeStep3").innerHTML = y + " -( " + (m * x) + " ) = b";
    document.getElementById("slopeStep4").innerHTML = y -(m * x) + " = b";
    document.getElementById("slopeAnswer").innerHTML = "y = " + m + "x + " + (y -(m * x));
}

 