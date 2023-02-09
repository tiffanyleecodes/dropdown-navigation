var down = document.querySelectorAll('.arrow-down')
const submenu = document.querySelectorAll('.submenu')
const menu = document.querySelector('.bar')
const open_btn = document.querySelector('.hambugur img')
const close_btn = document.querySelector('.close img')
const filter = document.querySelector('.filter')

open_btn.onclick = function(){
    if (menu.style.display === "none"){
        menu.style.display = "block";
        filter.style.backgroundColor = "lightgray";
    } else {
        menu.style.display = "none";
        
        
    }
}


for ( let i = 0; i < down.length ; i++ ) {
    down[i].onclick = function(){
        
        if ( submenu[i].style.display === "none") {
            submenu[i].style.display = "block";
            down[i].src = "./images/icon-arrow-up.svg ";
        }else {
            submenu[i].style.display = "none";
            down[i].src = "./images/icon-arrow-down.svg "
        }
    
    }
}

close_btn.onclick = function(){
    if (menu.style.display === "block"){
        menu.style.display = "none";
        filter.style.backgroundColor = "transparent";
        for ( let i = 0; i < down.length ; i++ ) {
        submenu[i].style.display = "none";
        down[i].src = "./images/icon-arrow-down.svg "}
    } else {
        menu.style.display = "block";
        
    }
}
