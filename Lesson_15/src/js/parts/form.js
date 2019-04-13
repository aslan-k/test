function form() {

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с Вами свяжемся.",
        failure: "Что-то пошло не так...",
    };

    let form = document.querySelector(".main-form"),
        inputs = document.getElementsByTagName("input"),
        contactForm = document.querySelector("#form"),
        email = document.getElementById("email"),
        statusMessage = document.createElement("div");
        statusMessage.classList.add("status");
    
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
 
    function sendForm(elem) {
        elem.addEventListener("submit", function(e) { 
            e.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem),
                obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
    
            let request = new XMLHttpRequest(),
                json = JSON.stringify(obj);

            request.open("POST", "server.php");
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    
            request.onreadystatechange = function() {
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success; 
                } else {
                    statusMessage.innerHTML = message.failure;
                }        
            };
            request.send(json);

            for(let i = 0; i < inputs.length; i++) { inputs[i].value = ""; }    
        
        });
    }
    sendForm(form);
    sendForm(contactForm);       
}

export default form;