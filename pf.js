function handleMenu() {
    let menu = document.getElementById("menu")
    menu.style.right = "0"

}

function handleClose() {
    let menu = document.getElementById("menu")
    menu.style.right = "-65vw"
}

/**********************Modals for project description********************************** */


    
let modal1 = document.getElementById("myModal1")
let btn1 = document.getElementById("rdmore1")
let span1 = document.getElementsByClassName("close1")[0]

btn1.onclick = function() {
  modal1.style.display = "block"
}
span1.onclick = function() {
  modal1.style.display = "none"
}

let modal2 = document.getElementById("myModal2")
let btn2 = document.getElementById("rdmore2")
let span2 = document.getElementsByClassName("close2")[0]

btn2.onclick = function() {
  modal2.style.display = "block"
}
span2.onclick = function() {
  modal2.style.display = "none"
}


let modal3 = document.getElementById("myModal3")
let btn3 = document.getElementById("rdmore3")
let span3 = document.getElementsByClassName("close3")[0]

btn3.onclick = function() {
  modal3.style.display = "block"
}
span3.onclick = function() {
  modal3.style.display = "none"
}


let modal4 = document.getElementById("myModal4")
let btn4 = document.getElementById("rdmore4")
let span4 = document.getElementsByClassName("close4")[0]

btn4.onclick = function() {
  modal4.style.display = "block"
}
span4.onclick = function() {
  modal4.style.display = "none"
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
    })
})