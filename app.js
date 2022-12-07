

function login(){
    console.log(username+ " "+ password)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username=="pooja123" && password=="12345")
    {
        window.location.href = "index.html";
    }
    else
    {
        alert('username or password is incorrect try Again');
    }

}


function b1(){
    localStorage.setItem("i1",document.getElementById("i1").innerHTML);
    localStorage.setItem("t1",document.getElementById('t1').innerHTML);
    localStorage.setItem("p1",document.getElementById('p1').innerHTML);
}
function b2(){
    localStorage.setItem("i2",document.getElementById("i2").innerHTML);
    localStorage.setItem("t2",document.getElementById('t2').innerHTML);
    localStorage.setItem("p2",document.getElementById('p2').innerHTML);
}function b3(){
    localStorage.setItem("i3",document.getElementById("i3").innerHTML);
    localStorage.setItem("t3",document.getElementById('t3').innerHTML);
    localStorage.setItem("p3",document.getElementById('p3').innerHTML);
}function b4(){
    localStorage.setItem("i4",document.getElementById("i4").innerHTML);
    localStorage.setItem("t4",document.getElementById('t4').innerHTML);
    localStorage.setItem("p4",document.getElementById('p4').innerHTML);
}function b5(){
    localStorage.setItem("i5",document.getElementById("i5").innerHTML);
    localStorage.setItem("t5",document.getElementById('t5').innerHTML);
    localStorage.setItem("p5",document.getElementById('p5').innerHTML);
}function b6(){
    localStorage.setItem("i6",document.getElementById("i6").innerHTML);
    localStorage.setItem("t6",document.getElementById('t6').innerHTML);
    localStorage.setItem("p6",document.getElementById('p6').innerHTML);
}function b7(){
    localStorage.setItem("i7",document.getElementById("i7").innerHTML);
    localStorage.setItem("t7",document.getElementById('t7').innerHTML);
    localStorage.setItem("p7",document.getElementById('p7').innerHTML);
}function b8(){
    localStorage.setItem("i8",document.getElementById("i8").innerHTML);
    localStorage.setItem("t8",document.getElementById('t8').innerHTML);
    localStorage.setItem("p8",document.getElementById('p8').innerHTML);
}function b9(){
    localStorage.setItem("i9",document.getElementById("i9").innerHTML);
    localStorage.setItem("t9",document.getElementById('t9').innerHTML);
    localStorage.setItem("p9",document.getElementById('p9').innerHTML);
}function b10(){
    localStorage.setItem("i10",document.getElementById("i10").innerHTML);
    localStorage.setItem("t10",document.getElementById('t10').innerHTML);
    localStorage.setItem("p10",document.getElementById('p10').innerHTML);
}




