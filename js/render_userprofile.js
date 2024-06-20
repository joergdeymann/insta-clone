function renderUserProfile() {
    let html =`
        <div class="section-right-row">
        <div class="userarea">
            <img class="circle-image height64" src="${user[userid]["img"]}">
            <div>
                <b>${user[userid]["tag"]}</b>
                <span class="advice">${user[userid]["name"]}</span>
            </div>
        </div> 
        <a>Wechseln</a>
        </div><br>

        <div class="flex-row space nogap">
           <div class="advice"><b>Vorschläge für Dich</b></div>
           <div><b>Alles ansehen</b></div>
        </div>
    
    `;
    return html;
}


function renderProfile(id) {
    let html =`
        <div class="section-right-row">
        <div class="userarea">
            <img class="circle-image height48" src="${user[id]["img"]}">
            <div>
                <b>${user[id]["tag"]}</b>
                <span class="advice">${user[id]["name"]}</span>
            </div>
        </div> 
        <a>Wechseln</a>
        </div>
    `;
    return html;
}

function renderImpressum() {
    let html =/*html*/
    `
    <p>
    <a href="./impressum.html">Impressum</a> <br><br>
    <a href="./datenschutz.html">Datenschutz</a> 
    </p>`;
    return html;

}

function renderProfileList() {
    let html ='';
    html += renderUserProfile();
    for (i=0;i<user.length;i++) {
        html +=renderProfile(i);
    }
    html += renderImpressum();
    document.getElementById("section-right").innerHTML = html;
}
