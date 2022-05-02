var ampolleta = document.getElementById("ampolleta")
var botonoff = document.getElementById ("apagar")
var botonon = document.getElementById("encender")

botonon.addEventListener("click",function(){
    ampolleta.src = "https://www.w3schools.com/js/pic_bulbon.gif"
    
}) 

botonoff.addEventListener("click",function(){
    ampolleta.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})
