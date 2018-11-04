$(document).ready(function () {

    let allQuestions = [
        bestMovie = {
            question: "Which was the best movie of the entire Trilogy?",
            options: ["The Fellowship of the Ring", "The Two Towers", "The Return of the King", "Impossible to compare"],
            answer: "Impossible to compare",
        },
        richterScale = {
            question: "What's hard as stone, and as light as a feather?",
            options: ["Plantirs", "Mithril", "Pippin's head", "The One Ring"],
            answer: "Mithril",
        }


    ];


    let counter = 10;
    let spotcheck = 0;
    let wins = 0;
    let losses = 0;
    questionCount = 0;


    function timer() {
        clearInterval(interval);
        var interval = setInterval(function () {
            counter--;
            jQuery("#number").html("Time remaining: " + counter);
            if (counter <= 0) {
                //Do something
                $("#number").html("Time's up! Click here for next Question");
            }
        }, 1000);


    };


    function start() {
        
        for (let i = questionCount; i < allQuestions.length; i++) {
            counter = 10;

            timer();
            $("#number").html("Time remaining: " + counter);
            $("#score").html("guessed right: " + wins + "<br>guessed wrong: " + losses);
            $("#mainFrame").text(allQuestions[i].question)
            for (let j = 0; j < allQuestions[i].options.length; j++) {
                $("#mainFrame").append("<div class=choice id=" + spotcheck + ">" + allQuestions[i].options[j] + "</div>")
                
            }
            $(".choice").on("click", function () {

                if (this.innerText == allQuestions[i].answer) {
                    $("#mainFrame").text("correct!")
                    wins++;
                    $("#score").html("guessed right: " + wins + "<br>guessed wrong: " + losses);
                    questionCount++;
                    $("#mainFrame").append("<div class=choice id=" + spotcheck + ">" + allQuestions[i].options[j] + "</div>");

                }
                else {
                    losses++;
                    $("#score").html("guessed right: " + wins + "<br>guessed wrong: " + losses);
                    questionCount++;
                    $("#mainFrame").append("<div class=choice id=" + spotcheck + ">" + allQuestions[i].options[j] + "</div>")
                }
            })


        }








        // $("#mainFrame").append("<div class=option id=option1>"+allQuestions[i].option1.display+"</div>")
        // $("#mainFrame").append("<div class=option id=option2>"+allQuestions[i].option2.display+"</div>")
        // $("#mainFrame").append("<div class=option id=option3>"+allQuestions[i].option3.display+"</div>")
        // $("#mainFrame").append("<div class=option id=option4>"+allQuestions[i].option4.display+"</div>")
        // timer();

        // $('#option1').click(function(){
        //     $(this).data('clicked', true);
        //   });
        //   $('#option2').click(function(){
        //     $(this).data('clicked', true);
        //   });
        //   $('#option3').click(function(){
        //     $(this).data('clicked', true);
        //   });
        //   $('#option4').click(function(){
        //     $(this).data('clicked', true);
        //   });

        // if($("#option1").data("clicked") && allQuestions[i].option1.value === true){
        //     alert('good job!')
        // }
        // if($("#option2").data("clicked") && allQuestions[i].option2.value === true){
        //     alert('good job!')
        // }
        // if($("#option3").data("clicked") && allQuestions[i].option3.value === true){
        //     alert('good job!')
        // }
        // if($("#option4").data("clicked") && allQuestions[i].option4.value === true){
        //     alert('good job!')
        // }





    };

    $("#mainFrame").on("click", function () {
        start();

    })
})
