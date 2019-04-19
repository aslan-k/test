function accordeon() {
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
}

export default accordeon;