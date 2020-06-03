// // global JavaScript variables
// var list = document.querySelectorAll(".preview-article");
// /* var arr = Array.prototype.slice.call(list); */
// var arr = [];
// for(var i = 0, n; n = list[i]; ++i) arr.push(n);
// var pageList = new Array();
// var currentPage = 1;
// var numberPerPage = 2;
// var numberOfPages = 1;   // calculates the total number of pages


// // /*TEST list of objects*/

// // function makeList() {
// //     for (x = 0; x < list.length; x++)
// //         list.push(list[x]);
// // }

// // /*executes test list on load of page */
// // function load() {
// //     makeList();
// //     numberOfPages = getNumberOfPages();
// // }
    
// // window.addEventListener('load', load);

// /*Calculates the number of total pages */
// function getNumberOfPages() {
//     return Math.ceil(list.length / numberPerPage);
// }

// /*loads next page */
// function nextPage() {
//     currentPage += 1;
//     loadList();
// }

// /*loads prev page */
// function previousPage() {
//     currentPage -= 1;
//     loadList();
// }

// /*loads first page */
// function firstPage() {
//     currentPage = 1;
//     loadList();
// }

// /*loads last page */
// function lastPage() {
//     currentPage = numberOfPages;
//     loadList();
// }

// /*dictates which items goes into which page */
// function loadList() {
//     var begin = ((currentPage - 1) * numberPerPage);
//     var end = begin + numberPerPage;

//     pageList = arr.slice(begin, end);
//     drawList();    // draws out our data
//     check();         // determines the states of the pagination buttons
// }


// /*Drawing the elements */
// function drawList() {
//     document.getElementById("list").innerHTML = "";
    
//     for (r = 0; r < pageList.length; r++) {
//         document.getElementById("list").innerHTML += pageList[r] + "";
//     }
// }

// /*disables buttons */
// function check() {
//     document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
//     document.getElementById("previous").disabled = currentPage == 1 ? true : false;
//     document.getElementById("first").disabled = currentPage == 1 ? true : false;
//     document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
// }




//https://www.thatsoftwaredude.com/content/9101/custom-javascript-pagination-of-objects  ----- OMG OMG OMG

//https://www.thatsoftwaredude.com/content/6125/how-to-paginate-through-a-collection-in-javascript --- slightly less omg























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