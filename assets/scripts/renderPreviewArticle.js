let previewSection = document.querySelector("#event-grid");
let PreviewList;

function renderPreviewArticle(){
    PreviewList.slice(0,3).forEach(Preview => {
        Preview = findArticleByID(Preview.id);
        previewSection.innerHTML += 
        `
        <article class="article-preview-grid">
            <img class="grid-image" src="${Preview.acf.hero_image}" alt="article image">
            <a class="grid-line-one " href="upcoming-article.html?${Preview.id}">
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
                <a class="article-btn fifty50 text-secondary" href="upcoming-article.html?${Preview.id}">Read&nbsp;more</a>
            </div>
            <div class="preview-description">
                <p class="text-secondary">${Preview.acf.event_description.slice(0, 100) + '...'}</p>
            </div>
            <a class="article-btn fifty50 text-secondary pc-article-btn mobile-none" href="upcoming-article.html?${Preview.id}"><span>Read&nbsp;more</span></a>
        </article>
    `;
    }),

    PreviewList.slice(3,4).forEach(Preview => {
        Preview = findArticleByID(Preview.id);
        previewSection.innerHTML += 
        `
        <article class="article-preview-grid mobile-none">
            <img class="grid-image" src="${Preview.acf.hero_image}" alt="article image">
            <a class="grid-line-one " href="upcoming-article.html?${Preview.id}">
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
                <a class="article-btn fifty50 text-secondary" href="upcoming-article.html?${Preview.id}">Read&nbsp;more</a>
            </div>
            <div class="preview-description">
                <p class="text-secondary">${Preview.acf.event_description.slice(0, 100) + '...'}</p>
            </div>
            <a class="article-btn fifty50 text-secondary pc-article-btn mobile-none" href="upcoming-article.html?${Preview.id}"><span>Read&nbsp;more</span></a>
        </article>
    `;
    });
    
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
                seeAllBtnRender();
                
            } catch (error) {
                errorMessage(`Something went wrong, please reload the page`);
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