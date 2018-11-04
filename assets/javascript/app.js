$(document).ready(function () { //only use once all the info needed to run are gathered
//create object containing all questions and answers
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

//set variables
    let spotcheck = 0;
    let wins = 0;
    let losses = 0;
    let questionCount = 0;
    let flag = false;

//timer function
    function timer() {
        clearInterval(interval); //not functioning the way it's supposed to
        var interval = setInterval(function () {
            counter--;
            jQuery("#number").html("Time remaining: " + counter);
            if (counter <= 0) {
                
                $("#number").html("Time's up!");
                $("#mainFrame").html("")
                
            }
        }, 1000);


    };


function nextQuestion(){
    $("#next").on("click",function(){
        questionCount++;
        start();
    })
}



function start() {
//for loop to run through object for questions


//instead of for loop to run though questions object, use flag
//and counter to choose which question to present


let nextButton = $("<button id=next>proceed to next question!</button>")

function questionSelect(){




        
            counter = 10;

            
            $("#number").html("Time remaining: " + counter);
            $("#score").html("guessed right: " + wins + "<br>guessed wrong: " + losses);
            $("#mainFrame").text(allQuestions[questionCount].question)
            for (let i = 0; i < allQuestions[questionCount].options.length; i++) {
                timer();
                $("#mainFrame").append("<div class=choice>" + allQuestions[questionCount].options[i] + "</div>")
                
            }
            $(".choice").on("click", function () {

                if (this.innerText == allQuestions[questionCount].answer) {
                    $("#number").text("correct!")
                    wins++;
                    $("#score").html("guessed right: " + wins + "<br>guessed wrong: " + losses);
                    $("#mainFrame").html(nextButton);

                    nextQuestion();

                }
                else {
                    losses++;
                    $("#score").html("guessed right: " + wins + "<br>guessed wrong: " + losses);
                    
                    $("#mainFrame").append("<div class=choice id=" + spotcheck + ">" + allQuestions[i].options[j] + "</div>")
                    nextQuestion();
                }
            })


        
        }

questionSelect();





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
