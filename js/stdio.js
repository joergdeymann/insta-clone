function save(key,content) {
    localStorage.setItem(key,JSON.stringify(content));
}
function load(key) {
    return JSON.parse(localStorage.getItem(key));
}