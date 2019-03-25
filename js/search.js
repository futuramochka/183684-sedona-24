
var link = document.querySelector(".offer-search-hotel");
var popup = document.querySelector(".form-search-hotel");
var form = document.querySelector("form");
var date_go = form.querySelector("[name=date-go]");
var date_back = form.querySelector("[name=date-back");
var minus_parents = form.querySelector(".minus-parents");
var plus_parents = form.querySelector(".plus-parents");
var minus_children = form.querySelector(".minus-children");
var plus_children = form.querySelector(".plus-children");
var num_parents = form.querySelector(".form-parents-num");
var num_children = form.querySelector(".form-children-num");

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.toggle("form-search-display");
    date_go.focus();
})

form.addEventListener("submit", function(evt){
    if(!date_go.value || !date_back.value){
        evt.preventDefault();
        console.log("Введи дату отправления или дату пребытия!!!");
    }
})

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        if(popup.classList.contains("form-search-display"))
            evt.preventDefault();
            popup.classList.remove("form-search-display");
    }
})

plus_parents.addEventListener("click", function(evt){ 
    if(num_parents.value != 20){
        num_parents.value++;
    } 
})

minus_parents.addEventListener("click", function(evt){ 
    if(num_parents.value >= 2){
        num_parents.value--;
    }
})

plus_children.addEventListener("click", function(evt){ 
    if(num_children.value != 20){
        num_children.value++;
    } 
})

minus_children.addEventListener("click", function(evt){ 
    if(num_children.value != 0){
        num_children.value--;
    }
})
