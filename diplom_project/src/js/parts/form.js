function form() {
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
}

export default form;