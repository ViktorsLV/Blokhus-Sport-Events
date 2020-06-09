let pastPreviewSection = document.querySelector("#past-event-grid");
let pastPreviewList;

function renderPastPreviewArticle(){
    pastPreviewList.slice(0,3).forEach(Preview => {
        Preview = findPreviewByIDPast(Preview.id);
        pastPreviewSection.innerHTML += 
        `
        <article class="article-preview-grid">
            <img class="grid-image" src="${Preview.acf.past_hero_image}" alt="article image">
            <a class="grid-line-one " href="past-article.html?${Preview.id}">
                <h3 class="text-primary">${Preview.acf.past_title}</h3>
            </a>
            <div class="grid-line-two">
                <div class="flex-normal">
                <i class="fas fa-user fa-2x"></i>
                    <p class="text-secondary">Author: ${Preview.acf.author}</p>
                </div>
            </div>
            <div class="grid-line-three">
                <div class="flex-normal fifty50">
                <i class="fas fa-edit fa-2x"></i>
                    <p class="text-secondary">${Preview.acf.posted_on}</p>
                </div>
                <a class="article-btn fifty50 text-secondary" href="past-article.html?${Preview.id}">Read&nbsp;more</a>
            </div>
            <div class="preview-description">
                <p class="text-secondary">${Preview.acf.past_description_one.slice(0, 100) + '...'}</p>
            </div>
            <a class="article-btn fifty50 text-secondary pc-article-btn mobile-none" href="past-article.html?${Preview.id}"><span>Read&nbsp;more</span></a>
        </article>
    `;
    }),

    pastPreviewList.slice(3,4).forEach(Preview => {
        Preview = findPreviewByIDPast(Preview.id);
        pastPreviewSection.innerHTML += 
        `
        <article class="article-preview-grid mobile-none">
            <img class="grid-image" src="${Preview.acf.past_hero_image}" alt="article image">
            <a class="grid-line-one " href="past-article.html?${Preview.id}">
                <h3 class="text-primary">${Preview.acf.past_title}</h3>
            </a>
            <div class="grid-line-two">
                <div class="flex-normal">
                <i class="fas fa-user fa-2x"></i>
                    <p class="text-secondary">Author: ${Preview.acf.author}</p>
                </div>
            </div>
            <div class="grid-line-three">
                <div class="flex-normal fifty50">
                <i class="fas fa-edit fa-2x"></i>
                    <p class="text-secondary">${Preview.acf.posted_on}</p>
                </div>
                <a class="article-btn fifty50 text-secondary" href="past-article.html?${Preview.id}">Read&nbsp;more</a>
            </div>
            <div class="preview-description">
                <p class="text-secondary">${Preview.acf.past_description_one.slice(0, 100) + '...'}</p>
            </div>
            <a class="article-btn fifty50 text-secondary pc-article-btn mobile-none" href="past-article.html?${Preview.id}"><span>Read&nbsp;more</span></a>
        </article>
    `;
    });
};

function seeAllBtnRenderPast(){
    pastPreviewSection.innerHTML += `<a class="all-btn text-secondary events-btn" href="past-events.html">See all events</a>`;
};



function errorMessage(msg) {
    console.log(msg);
}

function getPreviewFromWPPast() {
    const xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            try {
                pastPreviewList = JSON.parse(this.responseText);
                renderPastPreviewArticle();
                seeAllBtnRenderPast();
            } catch (error) {
                errorMessage(`Something went wrong, please reload the page`);
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

function findPreviewByIDPast(id){
    let preview;
    pastPreviewList.forEach(Preview => {
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

getPreviewFromWPPast();