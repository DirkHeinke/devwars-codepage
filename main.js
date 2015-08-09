
var actions = [
    {"url": "http://blue.devwars.tv/index.html", "id": "htmlBlue"},
    {"url": "http://blue.devwars.tv/style.css", "id": "cssBlue"},
    {"url": "http://blue.devwars.tv/main.js", "id": "jsBlue"},
    {"url": "http://red.devwars.tv/index.html", "id": "htmlRed"},
    {"url": "http://red.devwars.tv/style.css", "id": "cssRed"},
    {"url": "http://red.devwars.tv/main.js", "id": "jsRed"}
];
var reload = false;

updateAll();

setInterval(function () {
    if(reload) {
        updateAll();
    }
}, 10000);

function toggleReload() {
    reload = !reload;
}

function updateAll() {
    for(var i = 0; i < actions.length; i++) {
        var action = actions[i];
        console.log("Getting", action);
        set(action)
    }
}

function set(action) {
    getCode(action.url, function (data) {
        console.log('Updating', action);
        updateElement(action.id, clearText(data));
        hljs.highlightBlock(document.getElementById(action.id));
    });
}

function clearText(data) {
    return data
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/\//g, '&#x2F;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;');
}

function updateElement(id, content) {
    document.getElementById(id).innerHTML = content;
}

function getCode(url, cb) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            cb(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}