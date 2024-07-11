var drop = false;


addEventListener("DOMContentLoaded", function (){
    const drop_menu = document.querySelector(".drop_menu");
    const menu_icon = document.querySelector("#menu_icon");

    document.querySelectorAll(".drop_menu a").forEach( link => {
        link.onclick = () => {
            drop_menu.style.display  = "none";
            menu_icon.src ="assets/drop_icon.png"
            drop = false;
        }
        
    });


    document.querySelector(".menu_icon").onclick = () => {

        if(drop === false){
            drop_menu.style.display  = "flex";
            menu_icon.src = "./assets/delete.png"
            drop = true;
        }
        else{
            drop_menu.style.display  = "none";
            menu_icon.src ="assets/drop_icon.png"
            drop = false;
        }
    
    }

})

addEventListener("resize", function(){
    const drop_menu = document.querySelector(".drop_menu");
    if(window.innerWidth > 900) {
        drop_menu.style.display  = "none";
        menu_icon.src ="assets/drop_icon.png"
        drop = false;
    }
})