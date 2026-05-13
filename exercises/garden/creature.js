// add creatuer to da gardenn
$("#crAdd").click(function () {

    // grab the value from the text input and assign it to a variable crName
    let crName = $("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();
    let crPupilColor = $("#crPupilColor").val();
    // lets construct html for eyes
    let crEyesHtml = "";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHtml = crEyesHtml + `<div class='eye' style='color: ${crPupilColor}'>.</div>`;

    }
    // test in console
    console.log(crName);
    console.log(crColor);
    console.log(crEyesNum);
    console.log(crPupilColor);

    if (crName.length > 2) {
        $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHtml} </div>
                <div class="creature-info">${crName}</div>
            </div>
        `);
    }
    //"<div>" + crName + crColor + crEyesNum + "</div>");

    $("#crName").val("");
    $("#crColor").val("");
    $("#crEyesNum").val("");
    $("#crPupilColor").val("");

});

