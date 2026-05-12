//Constantes DOC;
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


let curSection = "inicio";
itemInicio.style.background = "white";
itemInicio.style.color = "#0D0D0D";
itemInicio.style.fontWeight = "bolder";

//EventListeners para a troca de "página";
itemHabilidades.addEventListener("click",() => {

    curSection = "habilidades"

    habilidades.style.display = "flex";
    inicio.style.display = "none";
    projetos.style.display = "none";
    sobreMim.style.display = "none";


    itemHabilidades.style.background = "white";
    itemHabilidades.style.color = "#0D0D0D";
    itemHabilidades.style.fontWeight = "bolder";

    itemInicio.style.background = "#0D0D0D";
    itemInicio.style.color = "white";
    itemInicio.style.fontWeight = "lighter";

    itemProjetos.style.background = "#0D0D0D";
    itemProjetos.style.color = "white";
    itemProjetos.style.fontWeight = "lighter";
    
    itemSobreMim.style.background = "#0D0D0D";
    itemSobreMim.style.color = "white";
    itemSobreMim.style.fontWeight = "lighter";



});
itemProjetos.addEventListener("click",() => {

    curSection = "projetos"

    habilidades.style.display = "none";
    inicio.style.display = "none";
    projetos.style.display = "flex";
    sobreMim.style.display = "none";


    itemHabilidades.style.background = "#0D0D0D";
    itemHabilidades.style.color = "white";
    itemHabilidades.style.fontWeight = "lighter";

    itemInicio.style.background = "#0D0D0D";
    itemInicio.style.color = "white";
    itemInicio.style.fontWeight = "lighter";

    itemProjetos.style.background = "white";
    itemProjetos.style.color = "#0D0D0D";
    itemProjetos.style.fontWeight = "bolder";
    
    itemSobreMim.style.background = "#0D0D0D";
    itemSobreMim.style.color = "white";
    itemSobreMim.style.fontWeight = "lighter";



});
itemSobreMim.addEventListener("click",() => {

    curSection = "sobremim"

    habilidades.style.display = "none";
    inicio.style.display = "none";
    projetos.style.display = "none";
    sobreMim.style.display = "flex";


    itemHabilidades.style.background = "#0D0D0D";
    itemHabilidades.style.color = "white";
    itemHabilidades.style.fontWeight = "lighter";

    itemInicio.style.background = "#0D0D0D";
    itemInicio.style.color = "white";
    itemInicio.style.fontWeight = "lighter";

    itemProjetos.style.background = "#0D0D0D";
    itemProjetos.style.color = "white";
    itemProjetos.style.fontWeight = "lighter";
    
    itemSobreMim.style.background = "white";
    itemSobreMim.style.color = "#0D0D0D";
    itemSobreMim.style.fontWeight = "bolder";



});
itemInicio.addEventListener("click",() => {

    curSection = "inicio"

    habilidades.style.display = "none";
    inicio.style.display = "flex";
    projetos.style.display = "none";
    sobreMim.style.display = "none";


    itemHabilidades.style.background = "#0D0D0D";
    itemHabilidades.style.color = "white";
    itemHabilidades.style.fontWeight = "lighter";

    itemInicio.style.background = "white";
    itemInicio.style.color = "#0D0D0D";
    itemInicio.style.fontWeight = "bolder";

    itemProjetos.style.background = "#0D0D0D";
    itemProjetos.style.color = "white";
    itemProjetos.style.fontWeight = "lighter";
    
    itemSobreMim.style.background = "#0D0D0D";
    itemSobreMim.style.color = "white";
    itemSobreMim.style.fontWeight = "lighter";



});
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

