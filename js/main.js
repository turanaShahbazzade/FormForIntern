function showTheSelectedPro() {
  let valOfSelect = document.getElementById("catagories").value;
  let choosenProducts = document.getElementsByClassName("product");
  for (i = 0; i < choosenProducts.length; i++) {
    choosenProducts[i].style.display = "none";
  }

  document.getElementById(valOfSelect).style.display = "block";
}
let laptops=document.querySelector(".laptops");
let submitBtn = document.querySelector(".btn");
let myForm = document.querySelector(".register");
let catagories = document.getElementById("catagories");
let label = document.querySelector(".label");
let compModel = document.querySelector(".comp-model");
let inputForLaptop = document.querySelector(".inputForLaptop");
let compPrice = document.querySelector(".comp-price");
let phoneModel = document.querySelector(".phone-model");
let phonePrice = document.querySelector(".phone-price");
let inputForMobile =document.querySelector(".inputForMobile");
let alertForCatagories = document.createElement("p");
myForm.addEventListener("submit", function (e) {

  alertForCatagories.innerText = " ";

  if (catagories.value == "proAdd"  ) {
    catagories.style.borderColor = "red";
    catagories.previousElementSibling.style.color = "red";
   
    alertForCatagories.innerText = "You have to choose product!";
    label.append(alertForCatagories);
    

    console.log("if 1");
   
   
  } else if (compModel.value == "modelAdd" && catagories.value=="laptops" ) {
    compModel.style.borderColor = "red";
    compModel.previousElementSibling.style.color = "red";
    alertForCatagories.innerText = "You have to choose computer model!";
    inputForLaptop.append(alertForCatagories);
    console.log("if 2");

  
  } else if (compPrice.value == "priceAdd" && catagories.value=="laptops") {
    compPrice.style.borderColor = "red";
  
    alertForCatagories.innerText = "You have to choose price!";
    alertForCatagories.style.color = "red";
    inputForLaptop.append(alertForCatagories);
    console.log("if 3");
    
  
  } 
  else  if(phoneModel.value=="modelAdd" && catagories.value=="mobile"){
      phoneModel.style.borderColor ="red";
      phoneModel.previousElementSibling.style.color="red";
      alertForCatagories.innerText = "You have to choose phone model!";
      inputForMobile.append(alertForCatagories);
      console.log("if 4");
    

  }
  else  if(phonePrice.value=="addPrice" && catagories.value=="mobile"){
    phonePrice.style.borderColor ="red";
    phoneModel.previousElementSibling.style.color="red";
  
    alertForCatagories.innerText = "You have to choose phone price!";
    inputForMobile.append(alertForCatagories);
    console.log("if 4");
    

}
  else {
    catagories.style.borderColor = "green";
    compModel.style.borderColor = "green";
    compPrice.style.borderColor = "green";
    phoneModel.style.borderColor="green";
    console.log("if 5");
  }

  phoneModel.addEventListener("change", function () {
    if (this.value !== "model" && this.value!=="modelAdd") {
      phoneModel.style.borderColor = "red";
    } else {
      phoneModel.style.borderColor = "green";
      phoneModel.previousElementSibling.style.color = "black";
     inputForMobile.firstElementChild.remove();
    }
  });
  phonePrice.addEventListener("change", function () {
    if (this.value !== "price" && this.value!=="addPrice") {
      phonePrice.style.borderColor = "red";
    } else {
      phonePrice.style.borderColor = "green";
      phoneModel.previousElementSibling.style.color = "black";
     inputForMobile.firstElementChild.remove();
    }
  });
  compPrice.addEventListener("change", function () {
    if (this.value !== "price" && this.value !== "priceAdd") {
      compPrice.style.borderColor = "red";
    } else {
      compPrice.style.borderColor = "green";
      compModel.previousElementSibling.style.color = "black";
      inputForLaptop.firstElementChild.remove();
    }
  });

  compModel.addEventListener("change", function () {
    if (
      this.value !== "hp" &&
      this.value !== "asus" &&
      this.value !== "mac" &&
      this.value !== "modelAdd"
    ) {
      compModel.style.borderColor = "red";
    } else {
      compModel.style.borderColor = "green";
      compModel.previousElementSibling.style.color = "black";
     inputForLaptop.firstElementChild.remove();
    }
  });

  catagories.addEventListener("change", function () {
    if (
      this.value !== "laptops" &&
      this.value !== "headphones" &&
      this.value !== "mobile" &&
      this.value !== "proAdd"
    ) {
      catagories.style.borderColor = "red";
    } else {
      catagories.style.borderColor = "green";
      catagories.previousElementSibling.style.color = "black";
      label.firstElementChild.remove();
    }
  });
});
