/* CONNECTING WP */

const apiUrl = "http://vikceb2.dreamhosters.com/wp-json/wp/v2/"; 
const apiKey = "EJ2AkadAkmytdiSL04u0Vh68Kr3ekQPM";

let articleSection = document.querySelector("#upcoming-article-js"); //section where articles should go


const upcomingCatId = 2; //ID from wp for the upcoming-event category
const pastCatID = 3; //ID from wp for the past-event category

let ArticleList;

function renderArticle(){
        let hrefLink = window.location.href.split("/")[8];
        let postID = hrefLink.split("?")[1];
        let postID2 = Number(postID);

    ArticleList.forEach(Article => {
        
        Article = findArticleByID(Article.id);
        Number(Article);
        
        
        if (Article.id == postID2){
            articleSection.innerHTML += 
            `
            <section class="hero-image">
            <img class="hero" src="${Article.acf.hero_image}" alt="${Article.acf.title}">
            <h1 class="sports-text text-primary">${Article.acf.title}</h1>
        </section>
    
        <section class="article-grid text-secondary">
            <div class="icon1">
                <p><i class="fas fa-calendar-alt"></i></p>
                <p><i class="fas fa-dollar-sign"></i></p>
                <p><i class="fas fa-map-marker-alt"></i></p>
                <p><i class="fas fa-clock"></i></p>
            </div>
    
            <div class="article-icon-info">
                <p><i class="fas fa-calendar-alt grid-i1"></i></p>
                <p><i class="fas fa-dollar-sign grid-i2"></i></p>
                <p><i class="fas fa-map-marker-alt grid-i3"></i></p>
                <p><i class="fas fa-clock grid-i4"></i></p>
                <p class="grid-p1">Date: ${Article.acf.date}</p>
                <p class="grid-p2">Price: ${Article.acf.price}</p>
                <p class="grid-p3">Location: ${Article.acf.location}</p>
                <p class="grid-p4">Time: ${Article.acf.time}</p>
            </div>
            <div class="article-text-info">
                <p class="grid-t1">Event duration: ${Article.acf.duration}</p>
                <p class="grid-t2">Hosted by: ${Article.acf.hosted_by}</p>
            </div>
        </section>
        <section class="pc-grid-map">
            <section class="explore-grid pc-explore-grid">
                <div class="element-detail"></div>
                <article class="article-text">
                    <h2 class="text-primary">${Article.acf.sub_title}</h2>
                    <p class="text-secondary">${Article.acf.event_description}</p>
                </article>
            </section>
            <section class="map-grid pc-map-grid">
                <img class="map-img" src="assets/images/article.jpg" alt="${Article.acf.location}">
                <div class="flex-normal map-media text-secondary">
                    <p>Share this event:</p>
                    <i class="fab fa-facebook fa-2x"></i>
                    <i class="fab fa-facebook-messenger fa-2x"></i>
                    <i class="fab fa-instagram fa-2x"></i>
                </div>
            </section>
        </section>`;
        }
        
    });
};
//const postsId;

function errorMessage(msg) {
    console.log(msg);
}

function getArticleFromWP() {
    const xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            try {
                ArticleList = JSON.parse(this.responseText);
                renderArticle();
                
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

function findArticleByID(id){
    let article;
    ArticleList.forEach(Article => {
        
        if(id == Article.id){
            article = JSON.parse(JSON.stringify(Article));
        }
    });
    if (article){
        return article;
    } else {
        return null;
    }
};

getArticleFromWP();
