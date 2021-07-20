let loginLink = document.querySelector(".login-link");
        let modalLogin = document.querySelector(".modal-login");
        let modalClose = modalLogin.querySelector(".modal-close");
        let login = modalLogin.querySelector("[name=login]");

        loginLink.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalLogin.classList.add("modal-show");
            login.focus();
        });

        modalClose.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalLogin.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (modalLogin.classList.contains("modal-show")) {
                    evt.preventDefault();
                    modalLogin.classList.remove("modal-show");
                }
            }
        });