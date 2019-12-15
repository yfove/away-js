// Initiate smooth scroll
$('a').smoothScroll({
    speed: 1000
});

// Initiate animate on scroll
AOS.init();

//Set intial score counter to zero before user begins the questionnaire
let intialScore = {
    mxBlue: 0,
    mxBrown: 0,
    mxRed: 0,
    mxBlack: 0,
    // mxGreen:  0,
    // mxSpeedSilver: 0
}

//Key-switch selection to be displayed to user on submit
const resultSwitch = {
    mxBlue: {
        name: "Cherry Mx Blue Switches.",
        description: "Ideal for people who like to hear and feel a click when they press a key, these tactile keyswitches help ensure accurate data entry.",
        image: "./assets/images/mxblue.gif"
    },

    mxBrown: {
        name: "Cherry Mx Brown Switches.",
        description: "Cherry MX Brown switches are tactile and quiet. Excellent for office use. These are a preferred choice for developers, writers, and anyone who works long hours in front of the computer.",
        image: "./assets/images/mxbrown.gif"
    },

    mxBlack: {
        name: "Cherry Mx Black Switches.",
        description:"Its linear feel, combined with a slightly higher spring force, has made this keyswitch popular in industrial and point-of-sale environments.",
        image: "./assets/images/mxblack.gif"
    },

    mxRed: {
        name: "Cherry Mx Red Switches.",
        description: "With its incredible response times and smooth operation, CHERRY MX RED’s linear feel, combined with minimal spring force, is ideal for fast typists and action gamers.",
        image: "./assets/images/mxred.gif"
    },
};


$(function(){
    $('form').on('submit', function(e){
        e.preventDefault(); //prevent refreshing and jumping to top of page
        //scroll to lower 'results' section
        $("html").animate({
            scrollTop: $(".results").offset().top},
            "slow");
        // get and assign variables
        const primary = Number($('input[name=question1]:checked').val());
        const operating = Number($('input[name=question2]:checked').val());
        const actuating = Number($('input[name=question3]:checked').val());
        // add up total points
        const answerTotalValues = primary + operating + actuating;
        // log the total
        console.log(answerTotalValues);

        $('.results').empty();
        if (answerTotalValues >= 1 && answerTotalValues <= 3) {
            $('.results').append(`<h2>${resultSwitch.mxBlue.name}</h2>
            <p>${resultSwitch.mxBlue.description}</p>
            <img src="${resultSwitch.mxBlue.image}">
            <p>
            </p>`);
        } else if (answerTotalValues >=4 && answerTotalValues <=7) {
            $('.results').append(`<h2>${resultSwitch.mxBrown.name}</h2>
            <img src="${resultSwitch.mxBrown.image}">
            <p>${resultSwitch.mxBrown.description}</p>
            <p>
            </p>`);
        } else if (answerTotalValues >=8 && answerTotalValues <=11) {
            $('.results').append(`<h2>${resultSwitch.mxBlack.name}</h2>
            <img src="${resultSwitch.mxBlack.image}">
            <p>${resultSwitch.mxBlack.description}</p>
            <p>
            </p>`);
        } else if (answerTotalValues >=12 && answerTotalValues <=15) {
            $('.results').append(`<h2>${resultSwitch.mxRed.name}</h2>
            <img src="${resultSwitch.mxRed.image}">
            <p>${resultSwitch.mxRed.description}</p>
            <p>
            </p>`);
        };
    })
})


