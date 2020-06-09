let pastPreviewSection = document.querySelector("#past-event-grid");
let pastPreviewList;

function renderPastPreviewArticle(){
    pastPreviewList.forEach(Preview => {
        Preview = findPreviewByIDPast(Preview.id);
        pastPreviewSection.innerHTML += 
        `
        <article class="article-preview-grid all-mon all-cat ${Preview.acf.month_for_filter} ${Preview.acf.category_for_filter}">
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
    })
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


/*Prev and Next functionality*/

/*Filtering Functionality */




let category = document.querySelector(".category");
let months = document.querySelector(".months");
/* let options = category.selectedOptions; */


category.addEventListener('change', function () {
    let option = category.options[category.selectedIndex].value;
    let allArticles = document.querySelectorAll(".article-preview-grid");
    /* console.log(event + "I am selected"); */
    allArticles.forEach(individualArticle => {

        if (option == "sports") {
            if (individualArticle.classList.contains('sports')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }

        if (option == "workshops") {
            if (individualArticle.classList.contains('workshops')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }

        if (option == "charity") {
            if (individualArticle.classList.contains('charity')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }

        if (option == "others") {
            if (individualArticle.classList.contains('others')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }

        if (option == "All-cat") {
            if (individualArticle.classList.contains('all-cat')) {
                individualArticle.classList.remove('hidden');
            } 
        }
    })

});

months.addEventListener('change', function () {
    let option = months.options[months.selectedIndex].value;
    let allArticles = document.querySelectorAll(".article-preview-grid");
    /* console.log(event + "I am selected"); */
    allArticles.forEach(individualArticle => {

        if (option == "January") {
            if (individualArticle.classList.contains('jan')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }

        if (option == "February") {
            if (individualArticle.classList.contains('feb')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }

        if (option == "March") {
            if (individualArticle.classList.contains('mar')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }

        if (option == "April") {
            if (individualArticle.classList.contains('apr')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "May") {
            if (individualArticle.classList.contains('may')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "June") {
            if (individualArticle.classList.contains('jun')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "July") {
            if (individualArticle.classList.contains('jul')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "August") {
            if (individualArticle.classList.contains('aug')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "September") {
            if (individualArticle.classList.contains('sep')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "October") {
            if (individualArticle.classList.contains('oct')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "November") {
            if (individualArticle.classList.contains('nov')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }
        if (option == "December") {
            if (individualArticle.classList.contains('dec')) {
                individualArticle.classList.remove('hidden');
            } else {
                individualArticle.classList.add('hidden');
            }
        }


        if (option == "All-mon") {
            if (individualArticle.classList.contains('all-cat')) {
                individualArticle.classList.remove('hidden');
            } 
        }
    })

});