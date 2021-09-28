function abrirModal(){
    document.getElementById('modal').style.top="0";
    document.getElementById('modal').style.display="block";
    const btnFechar = document.getElementById('btnFechar')
    btnFechar.style.visibility="visible"
}
function fecharModal(){
    document.getElementById('modal').style.top="-100%";
    btnFechar.style.visibility="hidden"
}
