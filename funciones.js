



function estudios(){
    const estudios = document.getElementById("estudios");
    document.getElementById("estudios").style.display="initial";
    document.getElementById("experiencia").style.display="none";
    document.getElementById("destrezas").style.display="none";
    estudios.style.fontSize="30px";
    estudios.style.color="aqua"; 
    document.getElementById("cat1").removeEventListener("click",estudios  );
}

function experiencia(){
    const experiencia = document.getElementById("experiencia");
    document.getElementById("experiencia").style.display="initial";
    document.getElementById("estudios").style.display="none";
    document.getElementById("destrezas").style.display="none";
    experiencia.style.fontSize="30px";
    experiencia.style.color="aqua"; 
 
    
}
function destrezas(){
    const destrezas = document.getElementById("destrezas");
    document.getElementById("destrezas").style.display="initial";
    document.getElementById("experiencia").style.display="none";
    document.getElementById("estudios").style.display="none";
    destrezas.style.fontSize="30px";
    destrezas.style.color="aqua"; 
    
}


document.getElementById("cat1").addEventListener("click",estudios  );
document.getElementById("cat2").addEventListener("click",experiencia);
document.getElementById("cat3").addEventListener("click",destrezas);


    
        

        


