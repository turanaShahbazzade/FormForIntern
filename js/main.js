
function showTheSelectedPro() {
    let valOfSelect = document.getElementById("catagories").value;
    let choosenProducts = document.getElementsByClassName("product");
   for(i=0; i<choosenProducts.length; i++){
       choosenProducts[i].style.display="none";

   }
  
   document.getElementById(valOfSelect).style.display="block";
   
};

let submitBtn = document.querySelector(".btn");
let myForm = document.querySelector(".register");
let catagories = document.querySelector("#catagories");

// var laptop = document.getElementById("catagories").options.item(1);
// var mobile = document.getElementById("catagories").options.item(2);
// var headphone = document.getElementById("catagories").options.item(3);

myForm.addEventListener("submit", function(e){ 
    let select = document.getElementById("catagories");
        console.log(select.value);
        if(select.value !=="laptops" || select.value !=="mobile" || select.value !=="headphones"){
            select.style.borderColor="red";
            console.log("if");
        }    
   else{
    e.preventDefault();
   }
    });
   

