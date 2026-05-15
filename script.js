//Constantes DOC;
const s = document.querySelector("html");
//Botão de fechar o container info;
const infoCloseVelha = document.getElementById("projetosInfoCloseVelha");
const infoCloseReceitas = document.getElementById("projetosInfoCloseReceitas");
//Botões de abrir o container info e container info;
const infoVelha = document.getElementById("projetosInfoVelha");
const infoButtonVelha = document.getElementById("projetosInfoButtonVelha");
const infoReceitas = document.getElementById("projetosInfoReceitas");
const infoButtonReceitas = document.getElementById("projetosInfoButtonReceitas");
//Botões de trocar de "página";
const itemInicio = document.getElementById("item-inicio");
const itemHabilidades = document.getElementById("item-habilidades");
const itemProjetos = document.getElementById("item-projetos");
const itemSobreMim = document.getElementById("item-sobremim");
//Divs principais;
const inicio = document.getElementById("inicio");
const habilidades = document.getElementById("habilidades");
const projetos = document.getElementById("projetos");
const sobreMim = document.getElementById("sobremim");


//EventListeners para abrir/fechar o container info;
infoButtonVelha.addEventListener("click",() => {
    infoVelha.style.display = "flex";
});
infoCloseVelha.addEventListener("click",() => {
    infoVelha.style.display = "none";
});
infoButtonReceitas.addEventListener("click",() => {
    infoReceitas.style.display = "flex";
});
infoCloseReceitas.addEventListener("click",() => {
    infoReceitas.style.display = "none";
});

