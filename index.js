// Code for changing the dice images Starts here

    var randomVar1 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage1 = "dice" + randomVar1 + ".png" // Generates a string name from dice1.png to dice6.png
    var randomDiceSource1 = "./images/" + randomDiceImage1;

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);

    var randomVar2 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage2 = "dice" + randomVar2 + ".png" // Generates a string name from dice1.png to dice6.png
    var randomDiceSource2 = "./images/" + randomDiceImage2;

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

// Code for changing the dice images Ends here

// Code for Changing the title Starts here

    var player1Won = "🚩 Player 1 won ";
    var player2Won = " Player 2 won 🚩";
    var draw = "🚩 It's a Draw 🚩"

    var h1Query = document.querySelector("h1");

    if(randomVar1 > randomVar2){
        h1Query.innerHTML = player1Won;
    }
    else if(randomVar1 < randomVar2){
        h1Query.innerHTML = player2Won;
    }
    else{
        h1Query.innerHTML = draw;
    }

// Code for Changing the title Ends here