var link = document.querySelector(".write-us");
    var popup = document.querySelector(".modal-feedback");
    var close = popup.querySelector(".modal-close")
    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=user-name]");
    var email = popup.querySelector("[name=email]");
    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");

      if (storage) {
        login.value = storage;
        email.focus();
      } else {
        login.focus();
      }

      login.focus();

    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    })

    form.addEventListener("submit", function (evt) {
      if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Нужно ввести имя и email");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });

    var mapLink = document.querySelector(".contacts-button-map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
        }
      }
    });
