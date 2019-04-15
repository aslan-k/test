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

//4. Карточка - Нижний слайдер
    let slides = document.querySelectorAll(".feedback-slider-item"),
        prev = document.querySelector(".main-prev-btn"),
        next = document.querySelector(".main-next-btn"),
        slideIndex = 1;
    
    //console.log(slides.length);
    //console.log(prev);

    showSlides(slideIndex);
    //let timeId = setInterval(showSlides(slideIndex), 3000);

    function showSlides(n) {
        (n > slides.length) ? slideIndex = 1 : "" ; //переключить направо с последней на первую
        (n < 1) ? slideIndex = slides.length : ""; //переключить налево с 1 на последнюю
             
        slides.forEach(item => item.style.display = "none"); //скрыть слыйды
        slides[slideIndex - 1].style.display = "block"; //показать первый слайд
    }

    function plusSlides(n) { //перелистывает слайды
        showSlides(slideIndex += n);
        //setInterval(showSlides(slideIndex += n), 3000);
    }
    prev.addEventListener("click", () => { plusSlides(-1); });//перелистывает слайды назад
    next.addEventListener("click", () => { plusSlides(1); }); //перелистывает слайды вперед

//5. Карточка - Формы в модальных окнах
    let message = {
        loading: "Идет отправка...",
        success: "Отправлено!",
        failure: "Ошибка!"
    };

    let formSendToDesigner = document.querySelector("#popup-design-form"),
        formGetConsultation = document.querySelector("#popup-consultation-form"),

        inputs = document.getElementsByTagName("input"),
        //textarea = document.getElementsByTagName("textarea"), ОЧИСТИТЬ textarea !!!!
        inputPhone = document.getElementById("phone-num"),
        
        statusMessage = document.createElement("div");
//////ВАЛИДАЦИя
    document.body.addEventListener('input', (e) => {
        let target = e.target;
        if(target == inputPhone) {
            function valid(inp) {
                if( !inp.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, '') ) {
                    statusMessage.innerHTML = message.onlyNumber;
                    console.log("OK");
                }
            }
            valid(target.value);    
        }         
    });

/*
target.value = target.value.replace (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, '')
            console.log("OK");


    document.body.addEventListener('input', (e) => {
        let target = e.target;
        if(target.tagName == "INPUT"){
            if(target == email) {   
                target.value = target.value.replace (/[^a-z@._]/, '')  
            } else {
                target.value = target.value.replace (/[^0-9+]/, '')
            }    
        } 
    });
                                     ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
    console.log(formSendToDesigner);
    console.log(formGetConsultation);

    console.log(inputs);
    console.log(statusMessage);
*/    

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

    //statusMessage.classList.add("status"); для стилизации

//<form class=form action=mailer/smart.php method=POST id="popup-consultation-form"> - 635 форма Консультация
//<form action= method=POST enctype=multipart/form-data  id="popup-design-form"> - 658 --> форма для Отправить Дизайнеру

//-----------------------------------------------------------------//


});












  