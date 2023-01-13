function ci(){
    const p = document.getElementById("p").value;
    const t = document.getElementById("t").value;
    const r = document.getElementById("r").value;
    const amount = p*Math.pow(1+r,t);
    const ci = amount-p;
    document.getElementById("ans").innerHTML="Compound Interest: "+ci.toFixed(2);  
}