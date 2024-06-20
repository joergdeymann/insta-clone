function toggleLikedPost(id) {
    toggleLikedPostInArray(id);
    if (onlyLikedPosts) {
        render();
    } else { 
        quickRenderLikePost(id);
        quickRenderLikeCount(id);
        save("db",db);
    }
}

function viewLikedPosts() {
    onlyLikedPosts=!onlyLikedPosts;
    render();
}

function toggleLikedPostInArray(id) {
    toggleInArray(id,'postLikedFrom');
}


function toggleLikedCommentInArray(id,pos) {
    toggleFieldInArray(db[id]['comment'][pos]['commentLikedFrom']);
}

function toggleLikedComment(id,pos) {
    toggleLikedCommentInArray(id,pos);
    quickRenderLikeComment(id,pos);
    save("db",db);
}