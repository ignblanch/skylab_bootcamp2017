var game = {
    player1: 0,
    player2: 0,

    rockPaperScissors: function(choice1, choice2) {
        function randomizeChoice2() {
            var arr = ['rock', 'paper', 'scissors'];
            return arr[Math.floor(Math.random() * 3)];
        }

        if (arguments.length === 1) {
            choice2 = randomizeChoice2();
        }

        if (choice1 === choice2) {
            return `${choice1.toUpperCase()} vs. ${choice2.toUpperCase()} => The result is a tie!`;
        }

        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                this.player1++;
                return "ROCK vs. SCISSORS => ROCK wins!";
            } else {
                this.player2++;
                return "ROCK vs. PAPER => PAPER wins!";
            }
        }

        if (choice1 === "paper") {
            if (choice2 === "rock") {
                this.player1++;
                return "PAPER vs. ROCK => PAPER wins!";
            } else {
                this.player2++;
                return "PAPER vs. SCISSORS => SCISSORS win!";
            }
        }

        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                this.player1++;
                return "SCISSORS vs. ROCK => ROCK wins!";
            } else {
                this.player2++;
                return "SCISSORS vs. PAPER => SCISSORS win!";
            }
        }
    },

    winner: function() {
        if (this.player1 === this.player2) {
            return 'The game is even right now!' 
        }else {
            return (this.player1 > this.player2) ? 'Player1 is winning!' : 'Player2 is winning!';
        }
    }
}
