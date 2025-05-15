addEventListener("keydown", (event) => {
    document.querySelector('.text').innerHTML = event.key;
    document.querySelector('.code').innerHTML = event.code;
    console.log(event);
});

document.addEventListenrer("mousedown", (e) => {
    e.preventDefault();
    document.querySelector('.text').innerHTML = e.key;
    document.querySelector('.code').innerHTML = e.code;
    console.log(event);
})
