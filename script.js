new Snow();
let b = document.querySelector(".snowflakes-box").style.display="none"
let d = document.querySelector(".snowball-box").style.display="none"


function vkl(){
    document.getElementById("body").style.backgroundImage="url(GOD.jpg)"
    document.getElementById("start").style.background="rgba(0, 0, 0, 0)"
    document.getElementById("vkl1").style.display="none"
    document.getElementById("vkl2").style.display="flex"
}
function vkl1(){
    document.getElementById("body").style.backgroundImage="url(GOD.jpg)"
    document.getElementById("start").style.background="rgba(0, 0, 0, 0.6)"
    document.getElementById("body").style.backgroundImage="url(elkaperedel.png)"
    document.getElementById("vkl1").style.display="flex"
    document.getElementById("vkl2").style.display="none"
}

function vkl2(){
    giftvalue = prompt("Какой подарок вы выберите? \n 1)1.000.000$   2)быть счастливым")
    if(giftvalue == 1){
        window.open("index2.html")
    }
    else if(giftvalue == 2) {
        window.open("index3.html")
    }
    else{
       alert("Перезапусти. Тебе сказали 1 или 2!!!")
    }
}







function vkl3(){
    let a = document.querySelector("#vkl4")
    let b = document.querySelector(".snowflakes-box")
    let d = document.querySelector(".snowball-box")

    if(a.innerHTML == "Снегопад") {
        a.innerHTML = "Убрать"
        b.style.display = ""
        d.style.display = ""
    }
    else{
        a.innerHTML = "Снегопад"
        b.style.display = "none"
        d.style.display = "none"
    }


}
function vkl5(){
    let a = document.querySelector("#vkl5")
    if(a.innerHTML == "Таймер"){
        a.innerHTML = "Убрать"
        document.querySelector(".starttimebig").style.display="flex"
    }
    else{
        a.innerHTML = "Таймер"
        document.querySelector(".starttimebig").style.display="none"
    }
}






















































