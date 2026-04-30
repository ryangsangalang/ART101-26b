
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

$("#needy-button").click(function () {

    count = count + 1;
    colorCount = count - 1;

    $("#needy-button").html("steps: " + count);

    if (count == 15) {
        count = 0;
        console.log("i felt something.");
    }

    if (count == 5) {
        $("#needy-button").after(" wait... ");
        }
    else if (count > 10) {
         $("#needy-button").after(" stop.");
        }



    });