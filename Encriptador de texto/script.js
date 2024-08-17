const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const resultado = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (texto === "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Campo vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe incluir acentos o caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener mayúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        resultado.value = texto;
        btnCopiar.style.visibility = "visible";
        contenido.style.display = "none";
    }
});

btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (texto === "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Campo vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe incluir acentos o caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener mayúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        resultado.value = texto;
        btnCopiar.style.visibility = "visible";
        contenido.style.display = "none";
    }
});

btnCopiar.addEventListener("click", e => {
    e.preventDefault();

    const textoParaCopiar = resultado.value;

    if (textoParaCopiar) {
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                console.log("Texto copiado exitosamente");
                aviso.style.background = "#0A3871";
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "Texto copiado!";

                setTimeout(() => {
                    aviso.removeAttribute("style");
                }, 1500);
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
                aviso.style.background = "#FF0000";
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "Error al copiar el texto";

                setTimeout(() => {
                    aviso.removeAttribute("style");
                }, 1500);
            });
    } else {
        console.error('No hay texto para copiar');
    }
});
