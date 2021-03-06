const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const input = document.querySelector("#form textarea");
const btnReset = document.getElementById("btn-reset");

const expReg = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[cC]{1}[oO]{1}[mM]{1}$/,
  businnes: /^[0-9a-zñáéíóú"'?¿¡!.\s]{1,40}$/i, // Letras y espacios, pueden llevar acentos.
  messagge: /^[0-9a-zñáéíóú"'?¿¡!.,()#°|$%&/=+-\s]{50,500}$/i, // Letras y espacios, pueden llevar acentos.
  messagge2: /^[\s]*$/, // no pueden tener espacios en blanco en el texto.
};

const campos = {
  name: false,
  email: false,
  businnes: false,
  messagge: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      validarCampo(expReg.name, e.target, "name");
      break;
    case "email":
      validarCampo(expReg.email, e.target, "email");
      break;
    case "businnes":
      validarCampo(expReg.businnes, e.target, "businnes");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("form__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("form__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} .form__input-error`)
      .classList.remove("form__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("form__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("form__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .form__input-error`)
      .classList.add("form__input-error-activo");
    campos[campo] = false;
  }
};

const validarTextarea = (e) => {
  e.preventDefault();
  if (
    !expReg.messagge2.test(e.target.value) &&
    expReg.messagge.test(e.target.value)
  ) {
    document
      .getElementById(`grupo__messagge`)
      .classList.remove("form__grupo-incorrecto");
    document
      .getElementById(`grupo__messagge`)
      .classList.add("form__grupo-correcto");
    document
      .querySelector(`#grupo__messagge i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__messagge i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__messagge .form__input-error`)
      .classList.remove("form__input-error-activo");
    campos["messagge"] = true;
  } else {
    document
      .getElementById(`grupo__messagge`)
      .classList.add("form__grupo-incorrecto");
    document
      .getElementById(`grupo__messagge`)
      .classList.remove("form__grupo-correcto");
    document
      .querySelector(`#grupo__messagge i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__messagge i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__messagge .form__input-error`)
      .classList.add("form__input-error-activo");
    campos["messagge"] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
input.addEventListener("keyup", validarTextarea);
input.addEventListener("blur", validarTextarea);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos.name && campos.email && campos.businnes && campos.messagge) {
    document.querySelector(".form_email").style.display = "block";

    setTimeout(function () {
      fetch("https://formsubmit.co/ajax/santiago1988quispep@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          document.querySelector(".form_email").style.display = "none";
          form.reset();
          document
            .getElementById("form__mensaje-exito")
            .classList.add("form__mensaje-exito-activo");
          setTimeout(() => {
            document
              .getElementById("form__mensaje-exito")
              .classList.remove("form__mensaje-exito-activo");
          }, 5000);
          document
            .querySelectorAll(".form__grupo-correcto")
            .forEach((icono) => {
              icono.classList.remove("form__grupo-correcto");
            });
          campos.name = false;
          campos.email = false;
          campos.businnes = false;
          campos.messagge = false;
        })
        .catch(() => {
          document.querySelector(".form_email").style.display = "none";
          document
            .getElementById("form__mensaje-error")
            .classList.add("form__mensaje-exito-error");
          setTimeout(() => {
            document
              .getElementById("form__mensaje-error")
              .classList.remove("form__mensaje-error-activo");
          }, 5000);
        });
    }, 5000);
  } else {
    document
      .getElementById("form__mensaje")
      .classList.add("form__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("form__mensaje")
        .classList.remove("form__mensaje-activo");
    }, 5000);
  }
});

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  form.reset();
  document.querySelectorAll(".form__grupo").forEach((icono) => {
    icono.classList.remove("form__grupo-correcto");
    icono.classList.remove("form__grupo-incorrecto");
  });
  document.querySelectorAll(".form__input-error").forEach((icono) => {
    icono.classList.remove("form__input-error-activo");
  });
  campos.name = false;
  campos.email = false;
  campos.businnes = false;
  campos.messagge = false;
});
