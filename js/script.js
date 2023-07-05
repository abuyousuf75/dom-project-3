const search = () => {
    const searchbox = document.getElementById("serachIteam").value.toUpperCase();
    const storeItems = document.getElementById("product-list");
  
    const product = document.querySelectorAll(".prouducts");
    const pName = document.getElementsByTagName("h2");
  
    for (var i = 0; i < pName.length; i++) {
      let match = product[i].getElementsByTagName("h2")[0];
  
      if (match) {
        let textValue = match.textContent || match.innerHTML;
  
        if (textValue.toLocaleUpperCase().indexOf(searchbox) > -1) {
          product[i].style.display = ""; 
        } else {
          product[i].style.display = "none"; 
        }
      }
    }
  }
  

