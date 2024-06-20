function isPostLiked(id) {
    let tag = user[userid]['tag'];
    let i = db[id]['postLikedFrom'].indexOf(tag);

    return i != -1;
}

function getDateDifferenceAsText(date1,date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60)); 
    const diffMinutes = Math.floor(diffTime / (1000 * 60)); 

    let text = '';
    if (diffDays > 1) {
        text=`vor ${diffDays} Tagen`;
    } else 
    if (diffHours > 1) {
        text=`vor ${diffHours} Stunden`;
    } else 
    if (diffMinutes > 1) {
        text=`vor ${diffMinutes} Minuten`;
    } else {
        text=`vor wenigen Sekunden`;
    }
    return text;
}

function indexOfTag(tag) {
    return user.map(function(e) { return e.tag; }).indexOf(tag);
}

function renderFounder(id) {
    let time=getDateDifferenceAsText(new Date(),new Date(db[id]["postCreateTime"]));
    let tag= db[id]["founderTag"];

    let i=indexOfTag(tag);
    let img=user[i]["img"];
    let name=user[i]["name"];
   

    let html =/*html*/`
    <p class="flex-row flex-center-vertical gap32">
        <img class="circle-image height32" src="${img}">
        <span>
            <b>${name}</b><br>
            <small class="advice">Erstellt ${time}</small>
        </span>
    </p>
    `;
    return html;
}

function renderImageSection(id) {
    let html =/*html*/`
    <div class="article-top">
        <img class="article-top-image cover" src="${db[id]["postImage"]}">

        <a href="${db[id]["postLink"]}" target="_blank" class="article-top-image-text">
            <p>${db[id]["postLinkText"]}</p>
        </a>
    </div>
    `;
    return html;
}

function renderArticleNav(id) {
    let classLike="";
    let classClip="";

    if (meIsInArray(db[id]["postLikedFrom"])) {
        classLike="heart-red";        
    }
    if (meIsInArray(db[id]["postPinnedFrom"])) {
        classClip="clip-blue";        
    }

    let html =/*html*/`
    <nav>
        <div>
            <img id="post-like${id}" class="image height32 ${classLike}" alt="Love" src="./img/heart_white.svg" onclick="toggleLikedPost(${id})">
            <img class="image height32" alt="Bubble" src="./img/bubble.svg">
            <img class="image height32" alt="Flyer" src="./img/flyer.svg">
        </div>
        <div>
            <img id="post-pin${id}" class="image height32 ${classClip}" alt="clip_black" src="./img/clip_black.svg" onclick="togglePinnedPost(${id})">

        </div>
    </nav>
    `;
    return html;
}

function renderArticleText(id) {
    let text=renderShortPostText(db[id]["postText"],id);
    let html =/*html*/`
    <p>
        <b>Gefällt <span id="post-likecount${id}">${db[id]["postLikedFrom"].length}</span> Mal</b>
    </p>
    <p id="post${id}">
        <b>${db[id]["founderTag"]}</b>${text} 
    </p>
    <p><span class="more" onclick="quickRenderPosts(${id},true)">alle ${db[id]["comment"].length} Komentare sehen</span></p>
    `;
    return html;
}

function renderLastCommentTime(id) {
    let pos=db[id]["comment"].length-1;
    let date=db[id]["comment"][pos]["time"];
    let time=getDateDifferenceAsText(new Date(),new Date(date)) 

    let html =/*html*/`
    <p class="time">${time}</p>
    `;
    return html;
}

function renderInput(id) {
    let html =/*html*/`
    <hr>
    <form action="javascript:addPost(${id});">
        <p class="space">
            <input class="input-post" id="input-post${id}" required placeholder="Kommentar hinzufügen ..." oninput="showValidButton(${id})">
            <button type="submit" class="link link-disable" id="button-post${id}">Posten</button>
        </p>
    </form>`;
    return html;

}


function renderPostLikeButton(id) {
    let liked = "";

    if (isPostLiked(id)) {
        liked = "heart-red";
    }

    let html = /*html*/`
        <img id="post-like${id}" class="image height32 ${liked}" alt="Like" src="./img/heart_white.svg" onclick="toggleLikedPost(${id})">
    `;
    return html;
}

function renderPostLikeText(id) {
    let count = db[id]['postLikedFrom'].length;
    let html = `<p><b>Gefällt ${count} Mal</b></p>`;
    return html;
}

function renderShortPostText(text,id) {
    let size=160;
    let html=text;
    if (text.length > size) {
        newText=text.substr(0,size);
        html=`
        <span id="short-post${id}">${newText}...<span class="more" onclick="renderLongPostText(${id})">mehr</span></span>
        `;
    } 
    return html;
}

function renderLongPostText(id) {
    document.getElementById(`short-post${id}`).innerHTML=addTagColor(db[id]['postText']);
}

function renderPostRow(id,pos) {
    let count=db[id]['comment'].length-1;
    let classLike="";
    if (pos != null ) {
        count=pos;
        if (meIsInArray(db[id]["comment"][pos]["commentLikedFrom"])) {
            classLike="heart-red";        
        }
    } 

    let comment=db[id]['comment'][count];
    let text="";
    if (pos != null) {
        text=renderShortCommentText(comment['text'],id,count);
    } else {
        text=renderShortPostText(comment['text'],id);
    }
    text=addTagColor(text);

    let html = /*html*/ `
    <p class="flex-row space">
        <span><b>${comment['tag']}</b> ${text}</span>
        <img id="post-like${id}-${count}" class="image obj-right height16 link icon-link ${classLike}" src="./img/heart_white.svg"  onclick="toggleLikedComment(${id},${count})">
    </p>`;

   return html;
} 

function renderTime(timeLeft) {
    let html='';
    if (timeLeft == null) {
        html='<p class="time">gerade eben</p>';
    } 
    return html;
}

function renderArticle(id) {
    let html='';
    html += "<article>";
    html += renderFounder(id);
    html += renderImageSection(id);
    html += renderArticleNav(id);

    html += renderComments(id);

    html += renderInput(id);
    html += "</article>";
    return html;
}

