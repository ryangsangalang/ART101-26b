
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum", "Pink"];
let colorCount;

let cat={
    color: "gray",
    isCute: true,
};

$("#needy-button").click(function () {

    count = count + 1;

    colorCount = count - 1;

    $("#needy-button").html("Wow....you clicked me " + count + " times..... " + colors[count]);

    $("#needy-button").css("background-color", colors[colorCount]);

    $("html").css("background-color", colors[colorCount+1]);

    console.log(cat.color);

});
