function verifierMath() {
    let rep0 = document.getElementById("m0").value;
    let rep1 = document.getElementById("m1").value;
    let rep2 = document.getElementById("m2").value;
    let rep3 = document.getElementById("m3").value;
    let rep4 = document.getElementById("m4").value;
    let rep5 = document.getElementById("m5").value;
    let rep6 = document.getElementById("m6").value;
    let rep7 = document.getElementById("m7").value;
    let rep8 = document.getElementById("m8").value;
    let rep9 = document.getElementById("m9").value;

    document.getElementById("rsm0").innerHTML = (rep0 == 12) ? "✔️" : "❌";
    document.getElementById("rsm1").innerHTML = (rep1 == 6) ? "✔️" : "❌";
    document.getElementById("rsm2").innerHTML = (rep2 == 9) ? "✔️" : "❌";
    document.getElementById("rsm3").innerHTML = (rep3 == 16) ? "✔️" : "❌";
    document.getElementById("rsm4").innerHTML = (rep4 == 10) ? "✔️" : "❌";
    document.getElementById("rsm5").innerHTML = (rep5 == 18) ? "✔️" : "❌";
    document.getElementById("rsm6").innerHTML = (rep6 == 50) ? "✔️" : "❌";
    document.getElementById("rsm7").innerHTML = (rep7 == 5) ? "✔️" : "❌";
    document.getElementById("rsm8").innerHTML = (rep8 == 16) ? "✔️" : "❌";
    document.getElementById("rsm9").innerHTML = (rep9 == 50) ? "✔️" : "❌";
}

function verifierConju() {
    let c0 = document.getElementById("c0").value.toLowerCase();
    let c1 = document.getElementById("c1").value.toLowerCase();
    let c2 = document.getElementById("c2").value.toLowerCase();
    let c3 = document.getElementById("c3").value.toLowerCase();
    let c4 = document.getElementById("c4").value.toLowerCase();
    let c5 = document.getElementById("c5").value.toLowerCase();
    let c6 = document.getElementById("c6").value.toLowerCase();
    let c7 = document.getElementById("c7").value.toLowerCase();
    let c8 = document.getElementById("c8").value.toLowerCase();
    let c9 = document.getElementById("c9").value.toLowerCase();

    document.getElementById("rsc0").innerHTML = (c0 == "mange") ? "✔️" : "❌";
    document.getElementById("rsc1").innerHTML = (c1 == "finis") ? "✔️" : "❌";
    document.getElementById("rsc2").innerHTML = (c2 == "parle") ? "✔️" : "❌";
    document.getElementById("rsc3").innerHTML = (c3 == "sommes") ? "✔️" : "❌";
    document.getElementById("rsc4").innerHTML = (c4 == "avez") ? "✔️" : "❌";
    document.getElementById("rsc5").innerHTML = (c5 == "chantent") ? "✔️" : "❌";
    document.getElementById("rsc6").innerHTML = (c6 == "joue") ? "✔️" : "❌";
    document.getElementById("rsc7").innerHTML = (c7 == "allons") ? "✔️" : "❌";
    document.getElementById("rsc8").innerHTML = (c8 == "es") ? "✔️" : "❌";
    document.getElementById("rsc9").innerHTML = (c9 == "finissent") ? "✔️" : "❌";
}
