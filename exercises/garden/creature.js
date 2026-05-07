// add creatuer to da gardenn
$("#crAdd").click(function () {

    // grab the value from the text input and assign it to a variable crName
    let crName = $("#crName").val();
    // test in console
    console.log(crName);

    if ((crName.length) > 2) {
        $("#creature-list").append("<div>" + crName + "</div>");
    }


    $("#crName").val("");

});

