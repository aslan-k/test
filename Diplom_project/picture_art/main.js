window.addEventListener("DOMContentLoaded", () => {

//1. Карточка - Модальные окна popup-consultation    
    let btnFlipFlap = document.getElementById("flip-flap"),
        btnBagFrames = document.getElementById("baguette-frames"),
        closeConsl = document.getElementById("close-popup-consultation"),

        modalPopupConsl = document.querySelector(".popup-consultation"),

        bindModalPopupConsl = (modalStatus) => {
            modalPopupConsl.style.display = modalStatus;
        };

    document.body.addEventListener("click", e => {
        let target = e.target;
        (target == btnFlipFlap || target == btnBagFrames) ? bindModalPopupConsl("block") : "";
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
    


        



    
});












  