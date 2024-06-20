function isEmpty(id) {
    return (document.getElementById(id).value == '');
}

function showValidButton(postNr) {
    let button=document.getElementById(`button-post${postNr}`);

    if (isEmpty(`input-post${postNr}`)) {
        if (!button.classList.contains("link-disable")) {
            button.classList.add("link-disable");
        } 
    } else {
        button.classList.remove("link-disable");
    }
}

function addPostToArray(id) {
    let text=document.getElementById(`input-post${id}`).value;
    let date=new Date().toString();

    let comment = 
    {
        'tag': user[userid]['tag'],
        'commentLikedFrom': [],
        'text': text,
        'time': date,
    };

    db[id]['comment'].push(comment);
    save("db",db);
}


