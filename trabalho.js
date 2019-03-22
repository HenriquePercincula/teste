function inserir(){   
    var p = document.createElement("p");
    p.innerHTML = "O Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para representar a sua página Web. Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar com DOM do que diretamente com código HTML ou CSS.";
    p.style.fontFamily='Verdana';
    p.style.textAlign="justify";
    var div = document.querySelector("#div1");
    var btn = document.querySelector("button");
    document.body.insertBefore(p, btn.nextSibling);
    document.body.replaceChild(p, btn);
}
