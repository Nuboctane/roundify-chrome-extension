setInterval(function(){
    let stack = document.body.querySelectorAll("*");
    for (let i = 0; i < stack.length; i++){
        stack[i].setAttribute("style", "border-radius:30px;");
    }
}, 1000);
