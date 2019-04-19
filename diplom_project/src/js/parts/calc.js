function calc() {
    let size = document.getElementById("size"),
        material = document.getElementById("material"),
        options = document.getElementById("options"),
        promocode = document.querySelector("#promo"),
        totalPrice = document.getElementById("total-price"),

        sizeSum = 0, materialSum = 0, optionSum= 0, promo, total = 0;
        
    totalPrice.innerHTML = 0;
 
    size.addEventListener("change", function() {
        sizeSum = +this.options[this.selectedIndex].value;
        total = (sizeSum + materialSum + optionSum)*10;
        promo = "";
        if(promocode.value == "IWANTPOPART"){promo = promocode.value;}
        if(sizeSum > 0 && materialSum > 0){
            if(promo == "IWANTPOPART"){
                totalPrice.innerHTML = total-total*0.3;
            } else { 
                totalPrice.innerHTML = total;
            }   
        } else {
            totalPrice.innerHTML = 0;
        }
    });
    material.addEventListener("change", function() {
        materialSum = +this.options[this.selectedIndex].value;
        total = (sizeSum + materialSum + optionSum)*10;
        promo = "";
        if(promocode.value == "IWANTPOPART"){promo = promocode.value;} 
        if(sizeSum > 0 && materialSum > 0){
            if(promo == "IWANTPOPART"){
                totalPrice.innerHTML = total-total*0.3;
                console.log(promo);
                console.log("pr3");
            } else {
                totalPrice.innerHTML = total;
            }
        } else {
            totalPrice.innerHTML = 0;
        }
    });
    options.addEventListener("change", function() {
        optionSum = +this.options[this.selectedIndex].value;
        total = (sizeSum + materialSum + optionSum)*10;
        promo = "";
        if(promocode.value == "IWANTPOPART"){promo = promocode.value;}
        if(sizeSum > 0 && materialSum > 0){
            if(promo == "IWANTPOPART"){
                totalPrice.innerHTML = total-total*0.3;
            } else {
                totalPrice.innerHTML = total;
            }              
        } else {
            totalPrice.innerHTML = 0;
        }
    });
    
    document.body.addEventListener("change", e => {
        let target = e.target;
        let promo = "";
        if(target == promocode) {
            if(promocode.value == "IWANTPOPART"){promo = promocode.value;}
            if(sizeSum > 0 && materialSum > 0){
                if(promo == "IWANTPOPART"){
                    totalPrice.innerHTML = total-total*0.3;
                } else {
                    totalPrice.innerHTML = total;
                }
            } else {
                totalPrice.innerHTML = 0;
            }
        }
    });

}

export default calc;