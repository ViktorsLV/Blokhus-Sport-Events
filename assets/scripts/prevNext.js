// global JavaScript variables
var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 1;   // calculates the total number of pages








































/* let eventIndex = 1;
let displayed;
let counter = 0;
let startIndex = 0;
let increment = 5;
let currentIndex = 0;
let number;
let articles = document.getElementsByClassName("preview-article");
showEvents(eventIndex);

function plusEvents(){
    showEvents(eventIndex += counter);
}

function minusEvents(){
    if (counter <= 5) {
        counter = 0;
    } else {
        for (number = (counter-counter); number < (counter-5); number++) {
            articles[number].style.display = "none";
        }
        counter -=5;
    }
    
}
//1 2 3 4 5 6 7
function showEvents2(startIndex){
    //
    for (startIndex; startIndex < increment; startIndex++) {
        
        articles[startIndex].style.display = "grid";
        
    }
    startIndex;
}

function showEvents(amount){
    
    if (amount > articles.length) {
        eventIndex = 1;
    }
    if (amount < 1) {
        eventIndex = articles.length;
    }
    
    for (number = counter; number < articles.length; number++) {
        articles[number].style.display = "none";
    }
    counter +=5;
    if (counter > articles.length) {
        counter = articles.length;
    } 
    for (displayed = 0; displayed < counter; displayed++) {
        articles[displayed].style.display = "grid";
    }

    
    /* for (hidden = (counter-5); hidden < counter; hidden++) {
        articles[hidden].style.display = "none";
    } 
} */