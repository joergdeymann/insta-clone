function addTagColor(str) {
    let search=/(@\w+)/g;
    let replace='<span class="at">$1</span>';
    return str.replace(search, replace);
}
function addPost(id) {
    addPostToArray(id);
   document.getElementById(`input-post${id}`).value="";
    showValidButton(id);
    
    quickRenderPosts(id);
}

function renderShortCommentText(text,id,pos) {
    let size=60;
    let html=text;
    if (text.length > size) {
        newText=text.substr(0,size);
        html=`
        <span id="short-post${id}-${pos}">${newText}...<span class="more" onclick="renderLongCommentText(${id},${pos})">mehr</span></span>
        `;
    } 
    return html;
}

function renderLongCommentText(id,pos) {
    document.getElementById(`short-post${id}-${pos}`).innerHTML=addTagColor(db[id]['comment'][pos]['text']);
}

function renderComments(id) {
    let html='';
    html += `<div id="post${id}">`;
    html += renderArticleText(id);

    let start=Math.max(0,db[id]["comment"].length-3);
    for (pos =start; pos < db[id]["comment"].length;pos++ ) {
        html += renderPostRow(id,pos)
    }
    
    html += renderLastCommentTime(id);
    html += `</div>`;
    return html;
}
