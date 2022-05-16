

function obliczsume()
{
    //suma a + b
    let a;
    let b;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    let liczbaA = parseInt(a);
    let liczbaB = parseInt(b);
    let suma = liczbaA + liczbaB
    let miejsceNaSume = document.getElementById("odpowiedz");
    miejsceNaSume.innerHTML = suma;
}


function obliczroznice()
{
    //suma c - d
    let c;
    let d;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    let liczbaC = parseInt(c);
    let liczbaD = parseInt(d);
    let roznica = liczbaC - liczbaD
    let miejsceNaRoznice = document.getElementById("odpowiedz1");
    miejsceNaRoznice.innerHTML = roznica;
}

function oblicziloczyn()
{
    //suma e * f
    let e;
    let f;
    e = document.getElementById("e").value;
    f = document.getElementById("f").value;
    let liczbaE = parseInt(e);
    let liczbaF = parseInt(f);
    let iloczyn = liczbaE * liczbaF
    let miejsceNaIloczyn = document.getElementById("odpowiedz2");
    miejsceNaIloczyn.innerHTML = iloczyn;
}

function oblicziloraz()
{
    //suma g / h
    let g;
    let h;
    g = document.getElementById("g").value;
    h = document.getElementById("h").value;
    let liczbaG = parseInt(g);
    let liczbaH = parseInt(h);
    let iloraz = liczbaG / liczbaH
    let miejsceNaIloraz = document.getElementById("odpowiedz3");
    miejsceNaIloraz.innerHTML = iloraz;
}