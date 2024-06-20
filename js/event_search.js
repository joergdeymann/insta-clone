function searchText() {
    search=document.getElementById("search-string").value;
    render();
    search="";
    document.getElementById("search-string").value="";
}

function searchKeyDown() {
    search=document.getElementById("search-string").value;
    render();
}