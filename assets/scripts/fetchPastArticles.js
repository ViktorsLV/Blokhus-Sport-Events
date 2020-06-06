/* CONNECTING WP */

/* const apiUrl = "http://vikceb2.dreamhosters.com/wp-json/wp/v2/"; 
const apiKey = "EJ2AkadAkmytdiSL04u0Vh68Kr3ekQPM"; */

let pastArticleSection = document.querySelector("#past-article-js"); //section where articles should go



const pastCatID = 3; //ID from wp for the past-event category

let pastArticleList;

function renderPastArticle(){
        /* let hrefLink = window.location.href.split("/")[7]; */
        let postID = window.location.href.split("?")[1];
        let postID2 = Number(postID);

        pastArticleList.forEach(Article => {
        
        Article = findArticleByIDPast(Article.id);
        Number(Article);
        
        
        if (Article.id == postID2){
            pastArticleSection.innerHTML += 
            `
            <section class="hero-image">
                <img class="hero" src="${Article.acf.past_hero_image}" alt="${Article.acf.past_title}">
                <h1 class="sports-text text-primary">${Article.acf.past_title}</h1>
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
            `;
        }
        
    });
};
//const postsId;

function errorMessage(msg) {
    console.log(msg);
}

function getArticleFromWPPast() {
    const xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            try {
                pastArticleList = JSON.parse(this.responseText);
                renderPastArticle();
                
            } catch (error) {
                errorMessage(`Error parsing JSON: ${error}`);
            }
        };
        if (this.responseText == 4 && this.status >400){
            errorMessage('An error has occured while getting the data. Please try again later!');
        };
    };
    xhttp.open('GET',`${apiUrl}posts?categories=${pastCatID}&per_page=25`,true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
};

function findArticleByIDPast(id){
    let article;
    pastArticleList.forEach(Article => {
        
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

getArticleFromWPPast();
