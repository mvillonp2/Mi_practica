function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}