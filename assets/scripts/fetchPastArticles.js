/* CONNECTING WP */

/* const apiUrl = "http://vikceb2.dreamhosters.com/wp-json/wp/v2/"; 
const apiKey = "EJ2AkadAkmytdiSL04u0Vh68Kr3ekQPM"; */

let pastArticleSection = document.querySelector("#past-article-js"); //section where articles should go

var slideIndexEvent = 1;

const pastCatID = 3; //ID from wp for the past-event category

let pastArticleList;

function renderPastArticle() {
    /* let hrefLink = window.location.href.split("/")[7]; */
    let postID = window.location.href.split("?")[1];
    let postID2 = Number(postID);

    pastArticleList.forEach(Article => {

        Article = findArticleByIDPast(Article.id);
        Number(Article);


        if (Article.id == postID2) {
            pastArticleSection.innerHTML +=
                `
            <section class="hero-image">
                <img class="hero" src="${Article.acf.past_hero_image}" alt="${Article.acf.past_title}">
                <h1 class="sports-text text-primary">${Article.acf.past_title}</h1>
            </section>
            <section>
                <p class="article-author text-secondary">Author: ${Article.acf.author}</p>
                <p class="article-author text-secondary">Posted on: ${Article.acf.posted_on}</p>
            </section>
            <section class="explore-grid">
                <div class="element-detail"></div>
                <article class="article-text">
                    <h2 class="text-primary">${Article.acf.past_sub_title_one}</h2>
                    <p class="text-secondary">${Article.acf.past_description_one}</p>
                </article>
            </section>
            <section class="explore-grid">
                <div class="element-detail"></div>
                <article class="article-text">
                    <h2 class="text-primary">${Article.acf.past_sub_title_two}</h2>
                    <p class="text-secondary">${Article.acf.past_description_two}</p>
                </article>
            </section>
            <section class="gallery-grid section-margin">
            <div class="element-detail3 mobile-none"></div>
            <h2 class="carousel-h2 text-primary gallery-h2"><span class="underlined-span">Gallery</span></h2>
            <i class="fas fa-chevron-left fa-3x arrow-left" onclick="plusDivs(-1)"></i>
            <div class="carousel-img past-event-images">
                <img id="image1" class="mySlidesEvent" src="${Article.acf.gallery_image_one}" alt="">
                <img id="image2" class="mySlidesEvent" src="${Article.acf.gallery_image_two}" alt="">
                <img id="image3" class="mySlidesEvent" src="${Article.acf.gallery_image_three}" alt="">
                <img id="image4" class="mySlidesEvent" src="${Article.acf.gallery_image_four}" alt="">
                <img id="image5" class="mySlidesEvent" src="${Article.acf.gallery_image_five}" alt="">
            </div>
            <i class="fas fa-chevron-right fa-3x arrow-right" onclick="plusDivs(1)"></i>
            <div class="flex-normal map-media text-secondary">
                <p>Share this event:</p>
                <a href="https://www.facebook.com/BlokhusSportEvent"><i class="fab fa-facebook fa-3x"></i></a>
                <a href="#"><i class="fab fa-facebook-messenger fa-3x"></i></a>
                <a href="#"><i class="fab fa-instagram fa-3x"></i></a>
            </div>
        </section>`;

            
            showDivs(slideIndexEvent);
        }

    });
};
//const postsId;

function errorMessage(msg) {
    console.log(msg);
}

function getArticleFromWPPast() {
    const xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                pastArticleList = JSON.parse(this.responseText);
                renderPastArticle();

            } catch (error) {
                errorMessage(`Error parsing JSON: ${error}`);
            }
        };
        if (this.responseText == 4 && this.status > 400) {
            errorMessage('An error has occured while getting the data. Please try again later!');
        };
    };
    xhttp.open('GET', `${apiUrl}posts?categories=${pastCatID}&per_page=25`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
};

function findArticleByIDPast(id) {
    let article;
    pastArticleList.forEach(Article => {

        if (id == Article.id) {
            article = JSON.parse(JSON.stringify(Article));
        }
    });
    if (article) {
        return article;
    } else {
        return null;
    }
};

getArticleFromWPPast();



function plusDivs(n) {
    showDivs(slideIndexEvent += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesEvent");
    if (n > x.length) {
        slideIndexEvent = 1
    }
    if (n < 1) {
        slideIndexEvent = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexEvent - 1].style.display = "block";
}

/*Source for slider code - https://www.w3schools.com/howto/howto_js_slideshow.asp */