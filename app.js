let b = 0;
function findtheslope()
{
    let m = document.getElementById("mslope").value;
    let x = document.getElementById("xcordinate").value;
    let y = document.getElementById("ycordinate").value;

    //y = m * x + b;


    document.getElementById("slopestep1").innerHTML = "Slope formula is y= " + m + "x + b";
    document.getElementById("slopestep2").innerHTML = y + "=" + (m * x) + " b";
    document.getElementById("slopestep3").innerHTML = y + "-(" + (m * x) + ") = b";
    document.getElementById("slopeFinal").innerHTML = y -(m * x) + " = b";
    document.getElementById("slopeformanswer").innerHTML = "y= " + m + "x + " + (y -(m * x));
}

 