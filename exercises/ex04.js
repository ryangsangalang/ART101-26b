let count = 0;
$("#needy-button").click(function () {
    count = count + 3;
    $("#needy-button").html("Wow....you clicked me " + count + " times.....");
});
