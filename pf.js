let links = document.getElementsByClassName("links")
let content = document.getElementsByClassName("content")


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
    menu.style.right = "-65vw"
}

/**********************Modals for project description********************************** */

document.addEventListener("DOMContentLoaded",function (){
    
var modal1 = document.getElementById("myModal1")
var btn1 = document.getElementById("rdmore1")
var span1 = document.getElementsByClassName("close1")[0]

btn1.onclick = function() {
  modal1.style.display = "block"
}
span1.onclick = function() {
  modal1.style.display = "none"
}
})

document.addEventListener("DOMContentLoaded",function (){
var modal2 = document.getElementById("myModal2")
var btn2 = document.getElementById("rdmore2")
var span2 = document.getElementsByClassName("close2")[0]

btn2.onclick = function() {
  modal2.style.display = "block"
}
span2.onclick = function() {
  modal2.style.display = "none"
}
})
document.addEventListener("DOMContentLoaded",function (){
var modal3 = document.getElementById("myModal3")
var btn3 = document.getElementById("rdmore3")
var span3 = document.getElementsByClassName("close3")[0]

btn3.onclick = function() {
  modal3.style.display = "block"
}
span3.onclick = function() {
  modal3.style.display = "none"
}

})
document.addEventListener("DOMContentLoaded",function (){
var modal4 = document.getElementById("myModal4")
var btn4 = document.getElementById("rdmore4")
var span4 = document.getElementsByClassName("close4")[0]

btn4.onclick = function() {
  modal4.style.display = "block"
}
span4.onclick = function() {
  modal4.style.display = "none"
}
})


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
    })
})