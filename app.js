function ejercicio1(){
    console.log(document.getElementsByTagName("p")[0]);
}

function ejercicio2(){
    var nav_bar=document.getElementById("nav-bar");
    console.log(nav_bar);
}

function ejercicio3(){
    var element=document.getElementsByClassName("black");
    for(var i=0; i<element.length; i++){
        element[i].style.width="100px";
        element[i].style.height="100px";
        element[i].style.backgroundColor="#0f0";
    }
}

function ejercicio4(){
    var parent=document.getElementById("footer");
    var child=parent.getElementsByClassName("black");
    for(var i=0; i<child.length; i++){
            child[i].style.width="100px";
            child[i].style.heigth="100px";
            child[i].style.backgroundColor="#0f0";
    }
}

function ejercicio5(){
    var divs=document.getElementsByTagName("div");
    for(var i=0; i<divs.length; i++){
        console.log(divs[i].id);
    }
}

function ejercicio6(){
    var img=document.getElementsByTagName("img");
    for(var i=0; i<img.length; i++){
        if(img[i].parentNode.className=="images"){
            console.log(img[i].src);
        }
    }
}

function ejercicio7(){
    var img=document.getElementsByTagName("img");
    for(var i=0; i<img.length; i++){
        if(img[i].parentNode.className=="images" && img[i].parentNode.tagName=="DIV"){
            console.log(img[i].src);
        }
    }
}

function ejercicio8(){
    var paragraphs=document.getElementsByTagName("p");
    for(var i=0; i<paragraphs.length; i++){
        paragraphs[i].innerHTML+="\n<button>Generic button</button>"
    }
}

function ejercicio9(){
    var footer=document.getElementById("footer");
    var texto=footer.getElementsByTagName("span");

    var nodoLi=document.createElement("li");
    var textoLi=document.createTextNode(texto[0].innerText);
    nodoLi.appendChild(textoLi);
    
    var nav_bar=document.getElementById("nav-bar");
    nav_bar.appendChild(nodoLi);
}