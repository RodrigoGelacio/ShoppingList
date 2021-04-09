$(".agregar").on("click", function (e) {

    let nuevoElemento = $("#newText").val();
    e.preventDefault();
    $(".Lista").append(`<li class="elementoLista">
                            <p>${nuevoElemento}</p>
                            
                            <button class="checar">check</button>
                            <button class="del">delete</button>
                            
                        </li>`)

});

$(".Lista").on("click", "button", function (e) {

    e.preventDefault();


    if ($(this).text() == "check") {

        $(this).parent().toggleClass("chec");

    }
    else {

        $(this).parent().remove();

    }


});

