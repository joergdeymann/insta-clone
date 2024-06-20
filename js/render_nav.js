function renderNav() {
    let heart="";
    if (onlyLikedPosts) {
        heart="heart-red";
    }
    let img=user[userid].img;

    html=/*html*/`
    <img class="image height32" alt="Home" src="./img/home.svg" onclick="reset();">
    <img class="image height32" alt="Send" src="./img/flyer.svg">
    <img class="image height32" alt="Navigate" src="./img/compass.svg">
    <img class="image height32 ${heart}" alt="Like" src="./img/heart_white.svg" onclick="viewLikedPosts()">
    <img class="circle-image height32" alt="You" src="${img}" onClick="toggleUserList()">
    `;

    document.getElementById("nav").innerHTML=html;
}
