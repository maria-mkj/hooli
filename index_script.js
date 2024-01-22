document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
  });

  
//variabler oprettes
const slide = document.querySelector('.slider-slide')
const btnNext = document.querySelector('.next')
const btnprevious = document.querySelector('.previous')

let currentImageIndex = 0;


//Opretter et "array med billeder" Lille database med billeder
let images = [
    'img/forside_brun_sovs.jpg',
    'img/forside_flaeskesteg.jpg',
    'img/forside_gran.jpg',
    'img/forside_peppernoed.jpg',
    'img/forside_risalamande.jpg',
    'img/forside_roedkaal.jpg'
]

//Image tag får en source. Funktionen søger for at give <img>tagget en src attribute -hver gang funktionen køres, opdateres src attributten
function setActiveSlide(index){
    slide.src = images[index]
    /* slide.setAttribute('src', images[index]) DISSE TO LINJER ER DE SAMME*/
}


//Frem knappen er aktiv og har fået nogle funktioner her.. funktionen kaledes og currentImageIndex sendes med i parameterområdet
setActiveSlide(currentImageIndex) //..og indsættes hvor der står 'index' oppe i setActiveSlide funktionen


//hvis vi er nået til det sidste billede i image arry'et, skal den startes forfra, når der trykkes på 'frem' knappen
//ellers currentImageIndex +1 - vis det næste billede i rækken
function next(){
    if(currentImageIndex >= images.length -1){ 
        currentImageIndex = 0;
    }else{
        currentImageIndex ++;
    }
    setActiveSlide(currentImageIndex)
}

//når der klikkes på knappen, så kørers next funktionen
btnNext.addEventListener('click', next);


// hvis der vises det første billede i image arry'et og der trykkes tilbage - vis det sidste billede i rækken
function previous(){
    if (currentImageIndex == 0){
        currentImageIndex = images.length -1;
    }else{
        currentImageIndex --;
    }
    setActiveSlide(currentImageIndex)
}

//når der klikkes på knappen, så kørers previos funktionen
btnprevious.addEventListener('click', previous)



//Piltasterne virker (når keydown bruges, er det en generel betegnelse for tastaturet)
document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowLeft'){
        previous()
    }
    if (event.key == 'ArrowRight'){
        next()
    }
})


setInterval(next, 6000) //der sættes interval så billederne skifter selv
//kør nextFunktionen hver 5 sekundt