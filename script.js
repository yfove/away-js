// Initiate smooth scroll
$('a').smoothScroll({
    speed: 1000
});

// Initiate animate on scroll
AOS.init();

//Set intial score counter to zero before user begins the questionnaire
let intialScore = {
    mxRed: 0,
    mxBlue: 0,
    mxBrown: 0,
    mxBlack: 0,
    mxGreen:  0,
    // mxSpeedSilver: 0
}

//Key-switches selection to be displayed to user
const resultSwitch = {
    mxBlack: {
        name: "We think you will like Cherry Mx Red Switches.",
        description: "With its incredible response times and smooth operation, CHERRY MX RED’s linear feel, combined with minimal spring force, is ideal for fast typists and action gamers.",
        image: "./assets/mxred.gif"
    },

    mxBlack: {
        name: "We think you will like Cherry Mx Blue Switches.",
        description: "Ideal for people who like to hear and feel a click when they press a key, these tactile keyswitches help ensure accurate data entry.",
        image: "./assets/mxBlue.gif"
    },

    mxBlack: {
        description: "This keyswitch is quiet with tactile feedback, making it perfect for accurate typing.",
        image: "./assets/mxBrown.gif"
    },

    mxBlack: {
        name: "We think you will like Cherry Mx Black Switches.",
        description:"Its linear feel, combined with a slightly higher spring force, has made this keyswitch popular in industrial and point-of-sale environments.",
        image: "./assets/mxBlack.gif"
    },

    mxBlack: {
        name: "We think you will like Cherry Mx Green Switches.",
        description: "The CHERRY MX Green is a slightly modified version of the blue switch. It is characterised by the same actuating characteristics, like an audible and tactile click, but the actuation force is higher with 80 centinewton. Because of this, the CHERRY MX Green is usually considered the perfect choice for the space bar on keyboards with MX Blue switches.",
        image: "./assets/mxGreen.gif"
    },

};

$(function(){
    $('from').on('submit', function(e){
        e.preventDefault();
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
        if (answerTotalValues >= 1 && answerTotalValues <= 4) {
            $('.results').append(`<h2>${resultSwitch.mxRed.name}</h2>
            <p>${resultSwitch.mxRed.description}</p>
            <img src="${resultSwitch.mxRed.image}">
            <p>
            </p>`);
        } else if (answerTotalValues >=5 && answerTotalValues <=8) {
            $('.results').append(`<h2>${resultSwitch.mxBlue.name}</h2>
            <img src="${resultSwitch.mxBlue.image}">
            <p>${resultSwitch.mxBlue.description}</p>
            <p>
            </p>`);
        } else if (answerTotalValues >=9 && answerTotalValues <=12) {
            $('.results').append(`<h2>${resultSwitch.mxBrown.name}</h2>
            <img src="${resultSwitch.mxBrown.image}">
            <p>${resultSwitch.mxBrown.description}</p>
            <p>
            </p>`);
        } else if (answerTotalValues >=13 && answerTotalValues <=16) {
            $('.results').append(`<h2>${resultSwitch.mxBlack.name}</h2>
            <img src="${resultSwitch.mxBlack.image}">
            <p>${resultSwitch.mxBlack.description}</p>
            <p>
            </p>`);
        } else if (answerTotalValues >=17 && answerTotalValues <=20) {
            $('.results').append(`<h2>${resultSwitch.spaCat.name}</h2>
            <img src="${resultSwitch.spaCat.image}">
            <p>${resultSwitch.spaCat.description}</p>
            <p>
            </p>`);
        };


    })
})


