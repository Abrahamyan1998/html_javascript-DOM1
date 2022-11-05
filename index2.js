let section = document.getElementsByTagName("i");
for(let i = 0; i < section.length; i++){
    section[i].style.color = "#F1E717";
   
}

let text = document.querySelector(".text")
text.style.backgroundColor = "#f1f1f1";             
text.style.padding = "50px";                  
text.style.fontSize = "40px";
text.style.color = "#746522";



let a = document.querySelectorAll("a")
for (let i = 0; i < a.length; i++){
    console.log(a[i]);                   
    a[i].style.color = "red"

}


let bloks = document.querySelectorAll(".bloks");


for (let i = 0; i < bloks.length; i++){
    console.log(bloks[i]);
    bloks[i].style.color = "rgb(0, 255, 213)";

}