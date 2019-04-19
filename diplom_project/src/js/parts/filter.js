function filter() {
    let portfolioMenu = document.querySelector(".portfolio-menu"),
        allActive = document.querySelector("#all"),
        lovers = document.querySelector("#lovers"),
        chef = document.querySelector("#chef"),
        girl = document.querySelector("#girl"),
        guy = document.querySelector("#guy"),
        grandmother = document.querySelector("#grandmother"),
        granddad = document.querySelector("#granddad"),
        portfoliono = document.querySelector(".portfolio-no"),
        tabs = document.getElementsByClassName("tabs"),
        allPicture = document.getElementsByClassName("all");
        
    let hidePicture = () => {
        for(let i = 0; i < allPicture.length; i++) {
            allPicture[i].classList.remove("show");
            allPicture[i].classList.add("hide"); 
        }
    }
    let hideTabs = () => {
        for(let i = 0; i < tabs.length; i++) {
            if( tabs[i].classList.remove("active") ){
                tabs[i].classList.add("active");
            }
        }
    } 
    portfolioMenu.addEventListener("click", e => {
        let target = e.target;
        if(target == lovers){
            hidePicture();
            hideTabs();
            lovers.classList.toggle("active");
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("lovers")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == chef){
            hidePicture();
            hideTabs();
            chef.classList.toggle("active"); 
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("chef")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == girl){
            hidePicture(); 
            hideTabs();
            girl.classList.toggle("active");
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("girl")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == guy){
            hidePicture();
            hideTabs();
            guy.classList.toggle("active"); 
            for(let i = 0; i < allPicture.length; i++) {
                if(allPicture[i].classList.contains("guy")) {
                    allPicture[i].classList.remove("hide");
                    allPicture[i].classList.add("show");
                }
            }
        }
        if(target == grandmother){
            hideTabs();
            hidePicture();
            grandmother.classList.toggle("active"); 
            portfoliono.style.display = "block";     
        }
        if(target == granddad){
            hideTabs();
            hidePicture();
            granddad.classList.toggle("active"); 
            portfoliono.style.display = "block";     
        }
        if(target == allActive){
            hideTabs();
            allActive.classList.toggle("active");
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