var buyLink=document.querySelectorAll(".buy"),cartPopup=document.querySelector(".modal-cart"),cartClose=cartPopup.querySelector(".modal-close"),continueShopping=cartPopup.querySelector(".button-cart");console.log(buyLink);for(var i=0;i<buyLink.length;i++)buyLink[i].addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.add("modal-show")});cartClose.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("modal-show")}),continueShopping.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),cartPopup.classList.contains("modal-show")&&cartPopup.classList.remove("modal-show"))});
