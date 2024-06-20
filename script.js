let onlyLikedPosts=false;
let search = "";


/*
    1. Only Liked
    2. Only Pinned oder not Pinned
    3. Text-Filter from user
*/
function renderFilter(id,onlyPinned) {
    if (onlyLikedPosts) {
        if (!hasLiked(db[id]["postLikedFrom"])) return false;
    }
    if (search != "") {
        if (db[id]["postText"].toLowerCase().indexOf(search.toLowerCase()) == -1) return false;
    }
    return hasLiked(db[id]["postPinnedFrom"]) == onlyPinned;

}

function renderPinnedFilter(pinned) {
    let html=``;
    for (id=0;id<db.length;id++) {
        if (renderFilter(id,pinned))     {
            html +=renderArticle(id);
        }
    }
    return html;
}

function renderInfo(html) {
    
    if (html == '') {
        html="<p>Du hast keine geliketen Posts <p>";
    } else {
        html="";
    }
    return html;
}

function render() {
    let html='';
    // DirectRender
    renderNav();
    renderLogin();

    // Render Later all Together
    html += renderPinnedFilter(true); // Only Pinned
    html += renderPinnedFilter(false); // The other

    html += renderInfo(html);

    document.getElementById("article").innerHTML=html;  

    save("db",db);
}

function renderLiked() {
    render();
}

function reset() {
    document.getElementById("search-string").value="";
    onlyLikedPosts=false;
    search = "";
    render();
}

function init() { 
    
    dbl=load("db");
    if (dbl != null)  {
        db=dbl;
    }
    userl=load("user");
    if (userl != null)  {
        user=userl;
    } else {
        save("user",user);  
    }
    render();
    renderProfileList();
   
}