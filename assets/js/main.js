let index = 0;
$(document).ready(function () {
    
    $('#button-add').click(function () {
        $("#content").append('<div class="custom-control custom-checkbox"> <span class="todo-elt">' +
            '<input type="checkbox" class="custom-control-input" id="customCheck' + index + '" name="check">' +
            '<label class="custom-control-label" for="customCheck' + index + '">' +
            $("input[name=title]").val() +
            '</label> ' +
            '<span class="delete-item" title="remove"> <i class="fa fa-times-circle"></i> </span>' +
            '</span></div >'
        )
        $("input[name=title]").val("");
        index = index + 1;
    });

    $("body").on('click', '.delete-item', function (){
        $(this).parent().fadeOut("slow");
        $(this).parent().parent().remove();
        console.log($(this));
    })

    $('input[name="title"]').keydown(function (event) {
        if (event.keyCode == 13) {
            $("#content").append('<div class="custom-control custom-checkbox"> <span class="todo-elt">' +
                '<input type="checkbox" class="custom-control-input" id="customCheck' + index + '" name="check">' +
                '<label class="custom-control-label" for="customCheck' + index + '">' +
                $("input[name=title]").val() +
                '</label> ' +
                '<span class="delete-item" title="remove"> <i class="fa fa-times-circle"></i> </span>' +
                '</span></div >'
            )
            $("input[name=title]").val("");
            index = index + 1;
            return false;
        }
    });

    
});
