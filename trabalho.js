function inserir(){   
    var p = document.createElement("p");
    p.innerHTML = "O Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para representar a sua página Web. Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar com DOM do que diretamente com código HTML ou CSS.";
    var p2 = document.createElement("p");
    p2.innerHTML = "Um dos grandes responsáveis por isso tudo é o objeto document que é responsável por conceder ao código Javascript todo o acesso a árvore DOM do navegador Web. Portanto, qualquer coisa criado pelo navegador Web no modelo da página Web poderá ser acessado através do objeto Javascript document. FONTE:Devmedia.";  
    p.style.fontFamily='Verdana';
    p2.style.fontFamily='Verdana';
    p.style.textAlign="justify";
    p2.style.textAlign="justify";
    var div = document.querySelector("#div1");
    var btn = document.querySelector("button");
    document.body.insertBefore(p, btn.nextSibling);
    document.body.replaceChild(p, btn);
}
