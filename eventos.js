document.addEventListener("DOMContentLoaded", function(){
    const div = document.getElementsByTagName('div')[0];
    const boton = document.getElementsByTagName('input')[0];
    let click = false;
    div.addEventListener("click", function(){
        if(!click){
            alert('Hola! Soy el div');
        }
        click = false;
    });
    boton.addEventListener("click", function(){
        alert('Hola!');
        click = true;
    });
});