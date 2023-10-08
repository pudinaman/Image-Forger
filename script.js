//Access Key for Unsplesh
const accessKey = "fww1l5b9Soqifw9YTlCrtHq7Lo-yNM52VkVF0qSIg6U";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreButton = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

//Async function for Search Images
async function searchImages() {

    keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    });
    showMoreBtn.style.display = "block";
}

//Search form Added for submition
searchForm.addEventListener("submit", (e) => {

    e.preventDefault();

    page = 1;

    searchImages();
});
