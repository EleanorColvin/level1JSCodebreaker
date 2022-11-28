guess = "";
code = 0;
clock = 7;
score = 0;

    function initialize()
    {
        console.log("NEW GAME:");
        generateNumber();
        guess = "";
        clock = 7;
    }
    function generateNumber()
    {
        digit1 = parseInt((Math.random()*3)+1);
        digit2 = parseInt((Math.random()*3)+1);
        digit3 = parseInt((Math.random()*3)+1);
        codeStr = digit1 + "" + digit2 + "" + digit3;
        code = parseInt(codeStr);
        guessOutput = document.getElementById("guess");
        clockOutput = document.getElementById("clock");
        scoreOutput = document.getElementById("score");
        display();
    }
    function addOne()
    {
        if(guess.length == 2)
        {
            guess += "1";
            compare();
        }
        else{
            guess += "1";
        }
        display();
    }
    function addTwo()
    {
        if(guess.length == 2)
        {
            guess += "2"; 
            compare(); 
        }
        else{
            guess += "2"; 
        }
        display();
    }
    function addThree()
    {
        if(guess.length == 2)
        {
            guess += "3";
            compare();
        }
        else{
            guess += "3";
        }
        display();
    }
    function compare()
    {
        guessnum = parseInt(guess);
        console.log(guessnum);
        if (guessnum == code)
        {
            console.log("match");
            console.log("You cracked the code!");
            score += clock;
            initialize();
        }
        else if(guessnum < code)
        {
            console.log("too low");
            clock -= 1;
        }
        else{
            console.log("too high");
            clock -= 1;
        }
        guess = "";
        if (clock == 0)
        {
            console.log("You got caught! Mission failed, you couldn't crack the code ):");
            score=0;
            initialize();
        }
    }
    function clearGuess()
    {
        guess = "";
        display();
    }
    function display()
    {
        guessOutput.innerHTML = guess;
        clockOutput.innerHTML = clock;
        scoreOutput.innerHTML = score;
    }