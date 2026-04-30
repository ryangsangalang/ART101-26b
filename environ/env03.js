
let environmentTitle = "Super Death Forest";

let environmentElements = ["mist", "dampness", "rotten leaves", "filthy"];

let mainEntity = {
    name: "The Creature",
    species: "unknown",
    mood: "unknown",
    isWatching: true,
    odor: "metallic"
};
let count = 0;


$("#check-pockets").click(function () {
    count = count + 1;
    colorCount = count - 1;

    $("#check-pockets").html("you emptied your pockets");

    if (count > 0) {
        $("#check-pockets").after
            (" --> just a broken iphone.");

    }

});

$("#walky").click(function () {

    count = count + 1;
    colorCount = count - 1;

    $("#walky").html("steps: " + count);

    if (count == 15) {
        count = 0;
        console.log("i felt something.");
    }

    if (count == 5) {
        $("#walky").after(" wait... ");
    }
    else if (count > 10) {
        $("#walky").after(" stop.");
    }

});

$("#left-look").click(function () {

    count = count + 1;
    colorCount = count - 1;

    $("#left-look").html("you looked left");

    if (count == 1) {
        count = 0;
        console.log("good choice");
    }

    if (count == 1) {
        $("#left-look").after(" you looked left.");
    }

 });

$("#right-look").click(function () {

        count = count + 1;
        colorCount = count - 1;

        $("#right-look").html("you looked right and returned your gaze forward.");

        if (count == 1) {
            count = 0;
            console.log("whatever choice");
        }

        if (count == 1) {
            $("#right-look").after(" you looked right.");
        }


    });