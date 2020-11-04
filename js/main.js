

let product = document.querySelectorAll(".product");
let laptop = document.querySelector(".laptop");
let submit = document.querySelector(".btn");
submit.addEventListener("click", function(e){
    e.preventDefault();

});
product.forEach((item) =>{
    item.addEventListener("click", function(){

        if(item.innerHTML=="Laptops"){
            laptop.classList.remove("d-none");
            laptop.classList.add("d-block");
        }
        else{
            laptop.classList.remove("d-block");
            laptop.classList.add("d-none");
        }
    })
});


