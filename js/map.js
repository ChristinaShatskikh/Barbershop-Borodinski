let buttonMap = document.querySelector(".js-button-map");

        let modalMap = document.querySelector(".modal-map");
        let mapClose = modalMap.querySelector(".modal-close");

        buttonMap.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalMap.classList.add("modal-show");
        });

        mapClose.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalMap.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (modalMap.classList.contains("modal-show")) {
                    evt.preventDefault();
                    modalMap.classList.remove("modal-show");
                }
            }
        });