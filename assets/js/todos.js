// check off specif li by clicking and change color of text

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on icon to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
//taking in user input
$("input[type = text]").on("keypress", function(event) {
    if (event.which === 13) {
        //grabbing input text from input text
        var toDoText = $(this).val();
        // gives a empty input
        $(this).val("");
        // create  a new li and add it to ui
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDoText + "</li>");
    }
});
//adding a toggle for when the icon is clicked
$(".fa-plus").on("click", function() {
    $("input[type = text]").fadeToggle();
});