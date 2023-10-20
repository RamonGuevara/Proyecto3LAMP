const img1 = document.getElementById("imgCarrousel"),
btnIzq1 = document.getElementById("btnIzq1"),
btnDer1 = document.getElementById("btnDer1"),
descripcion = document.getElementById("descripcionImg"),
listaImgsYo = ["tocandoMusicaDummy.webp", "bailandoDummy.jpg", "cantandoDummy.jpg"],
listaDescripcionesYo = ["Yo tocando", "Yo bailando", "Yo cantando"],
listaImgsIntereses = [""]

var cantImgs = listaImgsYo.length,
url = "../../assets/media/img/",
imgActual = 0

if(cantImgs != listaDescripcionesYo.length){
    alert("Tienes más imgs o descripciones, deben de ser del mismo tamaño")
    console.log("Tienes más imgs o descripciones, deben de ser del mismo tamaño")
}

function recorrerIndices(indice){
    if(indice > cantImgs-1){
        indice = 0
        return indice
    }else if(indice < 0){
        indice = cantImgs-1
        return indice
    }
    return indice
}

function cargarImg(btn){
    if(btn.getAttribute("id-btn") == "izquierdo"){
        imgActual = recorrerIndices(imgActual-1)
        img1.style.backgroundImage = "url("+url+listaImgsYo[imgActual]+")"
        descripcion.innerHTML = listaDescripcionesYo[imgActual]
    }else{
        imgActual = recorrerIndices(imgActual+1)
        img1.style.backgroundImage = "url("+url+listaImgsYo[imgActual]+")"
        descripcion.innerHTML = listaDescripcionesYo[imgActual]
    }
}

cargarImg(btnIzq1)

btnIzq1.addEventListener('click', function(event){cargarImg(this)}, false)
btnDer1.addEventListener('click', function(event){cargarImg(this)}, false)