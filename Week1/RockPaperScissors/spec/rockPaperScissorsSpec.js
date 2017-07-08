describe("RockPaperScissors", function() {

    beforeEach(function() {

    });

    it("Returs tie if both players choose the same", function() {
        expect(game.rockPaperScissors('paper', 'paper') ||
            rockPaperScissors('rock', 'rock') ||
            rockPaperScissors('scissors', 'scissors')).toContain('The result is a tie!');
    });

    it("Scissors beat paper", function() {
        expect(game.rockPaperScissors('paper', 'scissors')).toContain('SCISSORS win!');
    });

    it("Paper beats rock", function() {
        expect(game.rockPaperScissors('paper', 'rock')).toContain('PAPER wins!');
    });

    it("Rock beats scissors", function() {
        expect(game.rockPaperScissors('scissors', 'rock')).toContain('ROCK wins!');
    });

    it ("Provides random second player if only one argument is passed", function() {
      expect(game.rockPaperScissors('rock')).toContain('ROCK'||'PAPER'||'SCISSORS');  
    });

    it("Tells us which player is currently winning", function() {
        game.player1 = 1;
        game.player2 = 1;
            expect(game.winner()).toBe('The game is even right now!');
        game.player1 = 1;
        game.player2 = 0;
            expect(game.winner()).toBe('Player1 is winning!');
        game.player1 = 0;
        game.player2 = 1;
            expect(game.winner()).toBe('Player2 is winning!');
    });

});
