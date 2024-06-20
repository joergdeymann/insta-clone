function quickRenderLikePost(id) {
    document.getElementById(`post-like${id}`).classList.toggle("heart-red");
}

function quickRenderLikeComment(id,pos) {
    document.getElementById(`post-like${id}-${pos}`).classList.toggle("heart-red");
}

function quickRenderLikeCount(id) {
    document.getElementById(`post-likecount${id}`).innerText=db[id]['postLikedFrom'].length;   
}

function quickRenderPinPost(id) {
    document.getElementById(`post-pin${id}`).classList.toggle("clip-blue");
}

function quickRenderAddPost(id)  {
    let html = renderPostRow(id) + renderTime();
    let select = document.getElementById(`post${id}`);
    select.lastElementChild.remove();    
    select.innerHTML += html;
}
function quickRenderCommentCount(id) {
    document.getElementById(`comment-count${id}`).innerText=db[id]["comment"].length;
}

function quickRenderPosts(id,all) {
    let html=``;
    html += renderArticleText(id);


    let start=Math.max(0,db[id]["comment"].length-3);
    if (all) start=0;
    for (pos =start; pos < db[id]["comment"].length;pos++ ) {
        html += renderPostRow(id,pos)
    }
    
    html += renderLastCommentTime(id);
    document.getElementById(`post${id}`).innerHTML=html;
}
