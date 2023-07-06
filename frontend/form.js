$(document).ready(function() {
    $(".add-col").on("click", function(){
        $(".cols-boxes").append("<div class = \"col\"><input class = \"col-text\" type = \"text\"></div>");
    });
    $(".remove-col").on("click", function(){
        $(".cols-boxes").children("div[class=col]:last").remove();
    });

    $(".add-fd").on("click", function(){
        $(".fds-boxes").append("<div class = \"fd\"><input class = \"fd-text- 1\" type = \"text\">-><input class = \"fd-text- 2\" type = \"text\"></div>");
    });
    $(".remove-fd").on("click", function(){
        $(".fds-boxes").children("div[class=fd]:last").remove();
    });
 });