$("#addTodo").click(() => {
    const inputTodo = $("input").val();
    $("todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
    
    $("input").val("");
});

$(document).on("change", "input[type=checkbox]", () => {
    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
    } else {
        $(this).parent().css("text-decoration", "none");
    }
});