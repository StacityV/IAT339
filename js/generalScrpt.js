open = false;

function toggleMenu(){
    mainMenu = document.querySelector(".header-menu");
    console.log(open)
    if (open == false){
        mainMenu.style.display = "block";
    
    }else{
        mainMenu.style.display = "none";
        
    }

    open = !open;
        
}