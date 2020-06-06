let previewSection = document.querySelector("#event-grid");
let PreviewList;

function renderPreviewArticle(){
    
    PreviewList.forEach(Preview => {
        Preview = findArticleByID(Preview.id);
        previewSection.innerHTML += 
        `
        <article class="article-preview-grid">
            <img class="grid-image" src="${Preview.acf.hero_image}" alt="article image">
            <a class="grid-line-one " href="">
                <h3 class="text-primary">${Preview.acf.title}</h3>
            </a>
            <div class="grid-line-two">
                <div class="flex-normal">
                    <i class="fas fa-map-marker-alt fa-2x"></i>
                    <p class="text-secondary">${Preview.acf.location}</p>
                </div>
            </div>
            <div class="grid-line-three">
                <div class="flex-normal fifty50">
                    <i class="fas fa-calendar-alt fa-2x"></i>
                    <p class="text-secondary">${Preview.acf.date}</p>
                </div>
                <a class="article-btn fifty50 text-secondary pc-article-btn" href="upcoming-article.html?${Preview.id}">Read&nbsp;more</a>
            </div>
            <div class="preview-description">
                <p class="text-secondary">${Preview.acf.event_description.slice(0, 100) + '...'}</p>
            </div>
        </article>
    `;
    arr.push(Preview);
    })
    
};


function seeAllBtnRender(){
    previewSection.innerHTML += `<a class="all-btn text-secondary events-btn" href="upcoming-events.html">See all events</a>`;
};



function errorMessage(msg) {
    console.log(msg);
}

function getPreviewFromWP() {
    const xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            try {
                PreviewList = JSON.parse(this.responseText);
                renderPreviewArticle();
            } catch (error) {
                errorMessage(`Error parsing JSON: ${error}`);
            }
        };
        if (this.responseText == 4 && this.status >400){
            errorMessage('An error has occured while getting the data. Please try again later!');
        };
    };
    xhttp.open('GET',`${apiUrl}posts?categories=${upcomingCatId}&per_page=25`,true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
};

function findPreviewByID(id){
    let preview;
    PreviewList.forEach(Preview => {
        if(id == Preview.id){
            preview = JSON.parse(JSON.stringify(Preview));
        }
    });
    if (preview){
        return preview;
    } else {
        return null;
    }
};

getPreviewFromWP();



/*Prev and Next functionality*/

// global JavaScript variables
var list = document.querySelectorAll(".preview-article");
/* var arr = Array.prototype.slice.call(list); */
var arr = [];
for(var i = 0, n; n = list[i]; ++i) arr.push(n);
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 5;
var numberOfPages = 1;   // calculates the total number of pages


/*TEST list of objects*/

function makeList() {
    
}

/*executes test list on load of page */
function load() {
    getNumberOfPages();
}
    
window.addEventListener('load', load);

/*Calculates the number of total pages */
function getNumberOfPages() {
    return Math.ceil(arr.length / numberPerPage);
}

/*loads next page */
function nextPage() {
    currentPage += 1;
    loadList();
}

/*loads prev page */
function previousPage() {
    currentPage -= 1;
    loadList();
}

/*loads first page */
function firstPage() {
    currentPage = 1;
    loadList();
}

/*loads last page */
function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

/*dictates which items goes into which page */
function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = arr.slice(begin, end);

    drawList();    // draws out our data
    check();       // determines the states of the pagination buttons
}


/*Drawing the elements */
function drawList() {
    
    document.getElementById("event-grid").innerHTML = "";
    
    for (r = 0; r < pageList.length; r++) {
        document.getElementById("event-grid").innerHTML += 
        
            `
            <article class="article-preview-grid">
                <img class="grid-image" src="${pageList[r].acf.hero_image}" alt="article image">
                <a class="grid-line-one " href="">
                    <h3 class="text-primary">${pageList[r].acf.title}</h3>
                </a>
                <div class="grid-line-two">
                    <div class="flex-normal">
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                        <p class="text-secondary">${pageList[r].acf.location}</p>
                    </div>
                </div>
                <div class="grid-line-three">
                    <div class="flex-normal fifty50">
                        <i class="fas fa-calendar-alt fa-2x"></i>
                        <p class="text-secondary">${pageList[r].acf.date}</p>
                    </div>
                    <a class="article-btn fifty50 text-secondary pc-article-btn" href="upcoming-article.html?${pageList[r].id}">Read&nbsp;more</a>
                </div>
                <div class="preview-description">
                    <p class="text-secondary">${pageList[r].acf.event_description.slice(0, 100) + '...'}</p>
                </div>
            </article>
        `;
    }
    
}


/*disables buttons */
function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

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