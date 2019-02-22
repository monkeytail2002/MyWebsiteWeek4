//Example

function changeheading(){
    
    document.getElementById("h1heading").innerHTML = "<em>A New Italic Heading</em>";
    
}

function vanish(){
    
    var arrayx = document.getElementsByClassName("hero");
    arrayx[0].style.display = "none";
    
    
}

function changelogo(){
    
    var arrayy = document.getElementsByClassName("logo");
    arrayy[0].style.backgroundImage = "url(images/skullicon.svg)";
}


function changecolour(e, color){
    
    document.getElementById("h1heading").style.color = color;


}

var element = document.getElementsByClassName("hover");
element[0].addEventListener("mouseover", myFunction);

function myFunction(){
    
    document.getElementById("h1heading").innerHTML += "Mouse over man!  Mouse over! <br>";
}

//End Example