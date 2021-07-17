function compute() {
    // Here we validate principal value. If it is invalid we do not proceed with the calculation
    if (!validatePrincipal()) {
        return false;
    }

    p = document.getElementById("principal").value;
    // Here we calculate the interest
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //Here we display the result in the "result" span
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}

// This function updates the "rate_val" span with the value of the "rate" input
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// This function checks if the principal value is zero or negative
function validatePrincipal() {
    var x = document.getElementById("principal").value;
    if (x <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return false;
    }
    return true;
  }
