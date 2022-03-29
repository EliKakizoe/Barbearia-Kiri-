
let cabecalho = document.getElementsByTagName("header");


// construindo a estrutura dinamica com DOM ( header)

function criarHeader(){
let banner = document.querySelector('div#banner');
banner.innerHTML = `<img class="banner-top" src="../src/logo.jpg" alt="banner"> 
<div id="div-titulo">
  <h1 class="titulo">BARBEARIA KIRI</h1>
</div>`
cabecalho.appendeChild(banner);
}

criarHeader();