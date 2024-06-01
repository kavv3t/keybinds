addEventListener("keydown", (event) => {
    document.querySelector('.text').innerHTML = event.key;
    document.querySelector('.code').innerHTML = event.code;
    console.log(event);
});
