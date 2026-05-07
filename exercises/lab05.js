function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");
    if (userNumber == whatNumber) {
        $("#output").html("That's right. You did it. You said the right answer.");
    } else {
        $("#output").html("NURRRRRPPP BUTTWAD!!!!!!!!!");
    }
}

$("#good-button").click(function () {
    askNumber(7);
});