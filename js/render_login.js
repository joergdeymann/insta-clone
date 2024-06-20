function renderLogin() {    
    let html="";
    for (let i=0;i<user.length;i++) {

        html +=/*html*/`
        <a class="login-link" onClick="loginUser(${i})">
            <img class="circle-image height32" src="${user[i]["img"]}"> ${user[i]["name"]}
        </a>
        `;
    }
    document.getElementById("login").innerHTML=html;
}

function loginUser(i) {
    userid=i;
    render();
    renderProfileList();

    toggleUserList();
}

function toggleUserList() {
    document.getElementById("login-container").classList.toggle("hide");
}