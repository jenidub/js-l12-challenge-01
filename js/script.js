const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch ('https://picsum.photos/v2/list?limit=100');
    let images = await res.json();
    selectRandomImage(images);
}

const selectRandomImage = function(images) {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
}

const displayImage = function(obj) {
    const author = obj.author;
    const imageAddress = obj["download_url"];
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function() {
    getImage();
});
