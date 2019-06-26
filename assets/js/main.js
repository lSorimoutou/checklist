let index = 0;
$(document).ready(function () {
    
    $('#button-add').click(function () {
        $("#content").append('<div class="custom-control custom-checkbox">' +
            '<input type="checkbox" class="custom-control-input" id="customCheck' + index + '" name="check">' +
            '<label class="custom-control-label" for="customCheck' + index + '">'
             + $("input[name=title]").val() +
            '</label> </div >'
        )
        $("input[name=title]").val("");
        index = index + 1;
    });

    $("body").on('click', 'input[name="check"]', function (){
        $(this).parent().fadeOut("slow");
        $(this).parent().remove();
        console.log($(this));
    })

    
});
