function filter() {
    let portfolioMenu = document.querySelector(".portfolio-menu"),
        allActive = document.querySelector("#all"),
        lovers = document.querySelector("#lovers"),
        chef = document.querySelector("#chef"),
        girl = document.querySelector("#girl"),
        guy = document.querySelector("#guy"),
        grandmother = document.querySelector("#grandmother"),
        granddad = document.querySelector("#granddad"),
        portfolioNo = document.getElementsByClassName("portfolio-no"),
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
}

export default filter;