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



const typewriterElement = document.getElementById("typewriter");
const text = typewriterElement.innerHTML; // Pega o texto com formatação HTML
let index = 0;
typewriterElement.innerHTML = ""; // Limpa o texto da div para começar a digitação

function type() {
    // Adiciona o próximo caractere ao texto
    if (index < text.length) {
        typewriterElement.innerHTML += text[index++];
        setTimeout(type, 80); // Ajuste a velocidade de digitação aqui
    } else {
        // Reinicia a digitação após uma pausa
        setTimeout(() => {
            typewriterElement.innerHTML = ""; // Limpa o texto
            index = 0; // Reinicia o índice
            type(); // Inicia a digitação novamente
        }, 900); // Pausa antes de reiniciar
    }
}

// Inicia a função de digitação
type();