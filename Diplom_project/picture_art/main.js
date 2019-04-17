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
            accordions[b].style.transition = 3000;
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
        slideIndex = 1;

    showSlides(slideIndex);
    //setInterval(showSlides(slideIndex), 3000);
    //let timeId = setInterval(showSlides(slideIndex), 3000);

    function showSlides(n) {
        (n > slides.length) ? slideIndex = 1 : "" ;
        (n < 1) ? slideIndex = slides.length : "";
             
        slides.forEach(item => item.style.display = "none");
        slides[slideIndex - 1].style.display = "block";
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
        //setInterval(showSlides(slideIndex += n), 3000);    
    }
    prev.addEventListener("click", () => { plusSlides(-1); });
    next.addEventListener("click", () => { plusSlides(1);  });
    //next.addEventListener("click", () => { setInterval(plusSlides(1), 1000);  });
    //setInterval(prev.addEventListener("click", () => { plusSlides(-1); }), 3000);

//6. Карточка - Формы в модальных окнах
    let message = {
        loading: "Идет отправка...",
        success: "Отправлено!",
        failure: "Ошибка!",
        onlyNumber: "Некорректный ввод телефона!"
    };

    let formSendToDesigner = document.querySelector("#popup-design-form"),
        formGetConsultation = document.querySelector("#popup-consultation-form"),


        inputs = document.getElementsByTagName("input"),
        inputPhone = document.getElementById("phone-num"),
        inputConsPhone = document.getElementById("cons-phone-num"),

        textarea = document.getElementsByName("message");
        
        statusMessage = document.createElement("div");
        //statusMessage.classList.add("status");

    console.log(inputPhone.length);
    console.log(textarea);
/*  */   //ВАЛИДАЦИя
document.body.addEventListener('change', (e) => {
    let target = e.target;
    if(target == inputPhone || target == inputConsPhone) {
        validPhone();
        function validPhone() {
            let re = /^\d[\d\(\)\ -]{4,15}\d$/,        
                valid = re.test(target.value);
            if (valid == false) {
                statusMessage.innerHTML = message.onlyNumber;
                target.value = "";
                console.log("ОШИБКА");
            }
            return statusMessage;
        }     
    }         
});
/**/
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
        
            for(let i = 0; i < inputs.length; i++) { 
                inputs[i].value = "";
                textarea.placeholder = "Комментарий";
            } 
              
            
        });
    }
    sendForm(formSendToDesigner);
    sendForm(formGetConsultation);

    //statusMessage.classList.add("status"); для стилизации

 //<form class=form action=mailer/smart.php method=POST id="popup-consultation-form"> - 635 форма Консультация
 //<form action= method=POST enctype=multipart/form-data  id="popup-design-form"> - 658 --> форма для Отправить Дизайнеру

 //-----------------------------------------------------------------//

});












  