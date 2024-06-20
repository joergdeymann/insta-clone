function togglePinnedPost(id) {
    togglePinnedPostInArray(id);
    quickRenderPinPost(id);
    render(id);
}

function togglePinnedPostInArray(id) {
    toggleInArray(id,'postPinnedFrom');
}

function meIsInArray(field) {
    let tag=user[userid]['tag'];
    return field.indexOf(tag) != -1;
}

function hasLiked(field) {
    return meIsInArray(field);
}


function toggleInArray(id,field) {
    toggleFieldInArray(db[id][field]);
}

function toggleFieldInArray(field) {
    let tag=user[userid]['tag'];

    let i=field.indexOf(tag);
    if (i == -1) {
        field.push(tag);
    } else {
        field.splice(i,1);
    }

}

