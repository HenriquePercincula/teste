function inserir(){
    var body = querySelector("body");
    var p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    p.style.fontFamily='Verdana';
    var div = document.querySelector("#div1");
    var btn = document.querySelector("button");
    document.body.insertBefore(p, btn.nextSibling);
    document.body.replaceChild(p, btn);
}