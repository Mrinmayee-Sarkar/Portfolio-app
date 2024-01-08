let links = document.getElementsByClassName("links")
console.log(links)
let content = document.getElementsByClassName("content")
console.log(content)


function openLink(name) {
    for (var i of links) {
        i.classList.remove("active-link")

    }
    for (var i of content) {
        i.classList.remove("active-content")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(name).classList.add("active-content")
}


function handleMenu() {
    var menu = document.getElementById("menu")
    menu.style.right = "0"
}

function handleClose() {
    var menu = document.getElementById("menu")
    menu.style.right = "-200px"
}


window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Success!");
            })
    });
});