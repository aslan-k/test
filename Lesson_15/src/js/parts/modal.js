function modal() {
    let overlay = document.querySelector(".overlay"),
    bindModal = (btn, overlayStatus, overflowStatus) => {
        overlay.style.display = overlayStatus;
        btn.classList.add("more-splash");
        document.body.style.overflow = overflowStatus;
        setTimeout( () => {
            btn.classList.remove("more-splash");
        }, 1500);
    };
    document.body.addEventListener("click", e => {
        let target = e.target;

        (target.classList.contains("more") || target.classList.contains("description-btn") ) ? bindModal(target, "block", "hidden") : "";
         
        (target.classList.contains("popup-close") ) ? bindModal(target, "none", "") : "";
    });
}

export default modal;