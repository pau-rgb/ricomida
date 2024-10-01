$(document).ready(function() {
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });
});


$(document).ready(function() {

    $('h4.title').on('dblclick', function() {
        $(this).css('color', 'red');
    });
});


$(document).ready(function() {
    $('.card-title-rr').on('click', function() {
        $(this).closest('.card').find('.card-text').toggle();
    });
});

