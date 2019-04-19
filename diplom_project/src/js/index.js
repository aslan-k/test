 window.addEventListener("DOMContentLoaded", () => {

//1. Карточка - Модальные окна popup-consultation    
    let btnFlipFlap = document.getElementById("flip-flap"),
        btnBagFrames = document.getElementById("baguette-frames"),
        btnPortret = document.getElementById("portret"),

        closeConsl = document.getElementById("close-popup-consultation"),

        modalPopupConsl = document.querySelector(".popup-consultation"),

        bindModalPopupConsl = (modalStatus) => {
            modalPopupConsl.style.display = modalStatus;
        };

    document.body.addEventListener("click", e => {
        let target = e.target;
        (target == btnFlipFlap || target == btnBagFrames || target == btnPortret) ? bindModalPopupConsl("block") : "";
        (target == closeConsl)  ? bindModalPopupConsl("none") : "";
    });

//2. Карточка - Модальные окна popup design  
    let btnsOrder = document.querySelectorAll(".button-make-order"),
        closePopupDesign = document.getElementById("close-popup-design"),

        modalPopupDesign = document.querySelector(".popup-design"),

        bindModalPopupDesign = (modalStatus) => {
            modalPopupDesign.style.display = modalStatus;
        };

    document.body.addEventListener("click", e => {
        let target = e.target;
        if(target && target.classList.contains("button-make-order")) {
            for(let i = 0; i < btnsOrder.length; i++) {
                (target == btnsOrder[i]) ? bindModalPopupDesign("block") : "";          
            }
        }
        (target == closePopupDesign) ? bindModalPopupDesign("none") : "";        
    });

//3. Карточка - Модальное окно с подарком
    let btnGift = document.querySelector(".fixed-gift"),
        closePopupGift = document.getElementById("close-popup-gift"),
        
        modalPopupGift = document.querySelector(".popup-gift"),

        bindModalPopupGift = (modalStatus) => {
            modalPopupGift.style.display = modalStatus;
        };
    
    document.body.addEventListener("click", e => {
        let target = e.target;
        (target == btnGift) ? bindModalPopupGift("block") : "";
        (target == closePopupGift) ? bindModalPopupGift("none") : "";
    });

// 4. Карточка - Аккордеон
    let accordions = document.querySelectorAll(".accordion-block"),
        accordionHeading = document.querySelectorAll(".accordion-heading"); 

    let hideContent = a => {
        for(let i = a; i < accordions.length; i++) {
            accordions[i].classList.remove("show");
            accordions[i].classList.add("hide"); 
        }
    }
    hideContent(0);

    let showContent = b => {
        if(accordions[b].classList.contains("hide")) {
            accordions[b].classList.remove("hide");
            accordions[b].classList.add("show");
        }
    }

    for(let i = 0; i < accordionHeading.length; i++) {
        accordionHeading[i].addEventListener("click", () => {
            hideContent(0);
            showContent(i);
        });
    }

//5. Карточка - Нижний слайдер
    let slides = document.querySelectorAll(".feedback-slider-item"),
	    prev = document.querySelector(".main-prev-btn"),
	    next = document.querySelector(".main-next-btn"),
	    slideIndex = -1,
	    timerId;

	function showSlides(n) {
	    clearTimeout(timerId);
	    slideIndex += (n + slides.length);
	    slideIndex %= slides.length;
	    slides.forEach((item, i)  => item.style.display = slideIndex == i ? "block" : "none");
	    timerId = window.setTimeout(showSlides, 2000, n)
	}
	showSlides(1);
	next.addEventListener("click", () => { showSlides(1); });
	prev.addEventListener("click", () => { showSlides(-1); });
         
//6. Карточка - Формы в модальных окнах 
    let message = {
        loading: "Идет отправка...",
        success: "Отправлено!",
        failure: "Ошибка!",
        onlyNumber: "Некорректный ввод телефона!"
    };

    let formSendToDesigner = document.querySelector("#popup-design-form"),
        formGetConsultation = document.querySelector("#popup-consultation-form"),
        formMainConsultation = document.querySelector("#main-consultation-form"),
        inputs = document.getElementsByTagName("input"),
        inputPhone = document.getElementById("phone-num"),
        inputConsPhone = document.getElementById("cons-phone-num"),
        inputMainPhone = document.getElementById("main-phone-num"), 
        statusMessage = document.createElement("div");

//Валидация
    document.body.addEventListener('change', (e) => {
        let target = e.target;
        if(target == inputPhone || target == inputConsPhone || target == inputMainPhone) {
            validPhone();
            function validPhone() {
                let re = /^\d[\d\(\)\ -]{4,15}\d$/,        
                    valid = re.test(target.value);
                if (valid == false) {
                    statusMessage.innerHTML = message.onlyNumber;
                    target.value = "";
                }
                return message.onlyNumber;
            }     
        }         
    });
    function sendForm(elem) {
        elem.addEventListener("submit", function(e) { 
            e.preventDefault();
            elem.appendChild(statusMessage);
           
            let request = new XMLHttpRequest(),
                formData = new FormData(elem);
                
            request.open("POST", "server.php");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            
            request.send(formData);

            request.onreadystatechange = function() {
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }        
            }; 
            for(let i = 0; i < inputs.length; i++) { inputs[i].value = ""; }     
        });
    }
    sendForm(formSendToDesigner);
    sendForm(formGetConsultation);
    sendForm(formMainConsultation);

    /////////////// Калькулятор //////////////////

    let size = document.getElementById("size"),
        material = document.getElementById("material"),
        options = document.getElementById("options"),
        promocode = document.querySelector("#promo"),
        totalPrice = document.getElementById("total-price"),

        sizeSum = 0, materialSum = 0, optionSum= 0, total = 0;
        
    totalPrice.innerHTML = 0;
    
    size.addEventListener("change", function() {
        sizeSum = +this.options[this.selectedIndex].value;
        total = (sizeSum + materialSum + optionSum)*10;

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
    options.addEventListener("change", function() {
        optionSum = +this.options[this.selectedIndex].value;
        total = (sizeSum + materialSum + optionSum)*10;

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

//ФИЛЬТРАЦИя БЛОКОВ
    let portfolioMenu = document.querySelector(".portfolio-menu"),
        allActive = document.querySelector("#all"),
        lovers = document.querySelector("#lovers"),
        chef = document.querySelector("#chef"),
        girl = document.querySelector("#girl"),
        guy = document.querySelector("#guy"),
        grandmother = document.querySelector("#grandmother"),
        granddad = document.querySelector("#granddad"),
        //portfolioNo = document.getElementsByClassName("portfolio-no"),
        allPicture = document.getElementsByClassName("all");
        
    let hidePicture = () => {
        for(let i = 0; i < allPicture.length; i++) {
            allPicture[i].classList.remove("show");
            allPicture[i].classList.add("hide"); 
        }
    } 
    portfolioMenu.addEventListener("click", e => {
        let target = e.target;
        if(target == lovers){
            hidePicture(0);
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("lovers")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == chef){
            hidePicture(0); 
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("chef")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == girl){
            hidePicture(0); 
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("girl")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == guy){
            hidePicture(0); 
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("guy")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == grandmother){
            hidePicture(0); 
        }
        if(target == granddad){
            hidePicture(0);       
        }
        if(target == allActive){
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("hide")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }

    });

});












  