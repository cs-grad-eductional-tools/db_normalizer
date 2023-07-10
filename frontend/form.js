$(document).ready(function() {
    $(".add-col").on("click", function(){
        $(".cols-boxes").append("<div class = \"col\"><input class = \"col-text\" type = \"text\"></div>");
    });
    $(".remove-col").on("click", function(){
        $(".cols-boxes").children("div[class=col]:last").remove();
    });

    $(".add-fd").on("click", function(){
        $(".fds-boxes").append("<div class = \"fd\"><input class = \"fd-text-1\" type = \"text\">-><input class = \"fd-text-2\" type = \"text\"></div>");
    });
    $(".remove-fd").on("click", function(){
        $(".fds-boxes").children("div[class=fd]:last").remove();
    });

    $(".calculate").on("click", calculate);
 });

 function calculate(){
    getFormInputs();
 }

 function getFormInputs(){
    var colInputs = $(".col-text");
    var lhsInputs = $(".fd-text-1");
    var rhsInputs = $(".fd-text-2");

    var cols = []
    for(var i = 0; i < colInputs.length; i++){
        cols[i] = $(colInputs[i]).val();
    }

    var lhs =[]
    var rhs = []
    for(var i = 0; i < lhsInputs.length; i++){
        lhs[i] = $(lhsInputs[i]).val();
        rhs[i] = $(rhsInputs[i]).val();
    }
    console.log(cols);
    console.log(lhs);
    console.log(rhs)
 }
