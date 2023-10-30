const target = window.document.getElementsByClassName("titulo")[0];

const flickerLetter = (letter) =>
  `<span style="animation: text-flicker-in-glow ${
    Math.random() * 4
  }s linear both ">${letter}</span>`;
const colorLetter = (letter) =>
  `<span style="color: hsla(${
    Math.random() * 360
  }, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = (text) =>
  text.split("").map(flickerLetter).map(colorLetter).join("");
const neonGlory = (target) =>
  (target.innerHTML = flickerAndColorText(target.textContent));

neonGlory(target);
target.onclick = ({ target }) => neonGlory(target);






let fecha = new Date();

console.log(fecha.getDate());


if( fecha.getDate()>=2){
  function mostrar1(){
    document.getElementById("img").style.display ="block";
  }
  
  function ocultar1(){
    document.getElementById("img").style.display= "none"
  
  }
 
} else {
  
  numero=1;
}


if( fecha.getDate()>=3){

  function mostrar2(){
    document.getElementById("img2").style.display ="block";

  }
  
  function ocultar2(){
    document.getElementById("img2").style.display= "none"
  
  }


} else {
  
  numero=1;
}



if( fecha.getDate()>=4){
  function mostrar3(){
    document.getElementById("img3").style.display ="block";
  }
  
  function ocultar3(){
    document.getElementById("img3").style.display= "none"

  }


} else {
  
  numero=1;
}


if( fecha.getDate()>=5){
  function mostrar4(){
    document.getElementById("img4").style.display ="block";
  }
  
  function ocultar4(){
    document.getElementById("img4").style.display= "none"
  }

} else {
  
  numero=1;
}

if( fecha.getDate()>=6){
  function mostrar5(){
    document.getElementById("img5").style.display ="block";
  }
  
  function ocultar5(){
    document.getElementById("img5").style.display= "none"
  }

} else {
  
  numero=1;
}

if( fecha.getDate()>=7){
  function mostrar6(){
    document.getElementById("img6").style.display ="block";
  }
  
  function ocultar6(){
    document.getElementById("img6").style.display= "none"
  }

} else {
  
  numero=1;
}

if( fecha.getDate()>=8){
  function mostrar7(){
    document.getElementById("img7").style.display ="block";
  }
  
  function ocultar7(){
    document.getElementById("img7").style.display= "none"
  }

} else {
  
  numero=1;
}