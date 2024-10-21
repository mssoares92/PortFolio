$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});



const text = `Você está no portfólio de Matheus Soares conheça mais sobre ele abaixo...`;
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function type() {
    if (index < text.length) {
        typewriterElement.textContent += text[index++];
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
            typewriterElement.textContent = ""; // Limpa o texto
            index = 0; // Reinicia o índice
            type(); // Inicia a digitação novamente
        }, 1000); // Pausa antes de reiniciar
    }
}

type();