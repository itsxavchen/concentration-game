# Concentration Game

![Game launch page](./images/Game%20screenshot%20-%201.png)
![Game launch page](./images/Game%20screenshot%20-%202.png)
![Game launch page](./images/Colour%20palette.png)

### Project Brief
The memory card game starts with all cards displayed face-down on the board. The players start by selecting a card to reveal its hidden pattern. The goal is to find matching pairs by clicking on a second card. If the patterns on both selected cards match, they remain face-up. However, if the patterns do not match, players lose one of their 10 available chances. Once all 10 chances are used up, the game ends.

A reset button is positioned at the bottom of the screen, allowing the players to restart the game and restore their 10 chances. The players can use this button to reset the game at any time during the game.

[**Click here to play the game**](https://itsxavchen.github.io/concentration-game/)

### Project Plan:
 * Set up the game state and display the cards face-down.
 * Players begin the game by clicking on a card.  
* If this is the first card selected, remember this card as the first and reveal the pattern.
* If this is the second card selected, remember this card as the second and reveal the pattern.
* If the patterns of the first and second cards are the same, keep both cards face-up.
* If the patterns of the first and second cards aren’t the same, hide the patterns of both cards.
* Reset the game by clicking on the reset button.
* Set total chances back to 10.
* Hide all card patterns (flip cards face-down) and place the shuffled cards on the board.

### Languages:
* **HTML**: defines the core structure of the game, including the cards with their front and back sides, the reset button, and the display element that shows the remaining number of chances.

* **CSS**: is responsible for styling the game and creating a visually appealing and interactive user interface. It handles the appearance of the cards (such as flipping animation and click-on effect), the layout of the game board

* **Javascript**: determines the logic of the game, manages the card-flipping behaviour, checks for matching pairs, and tracks the number of remaining chances.

### Future Developments:

* **RemoveEventListener**: once two cards with matching patterns are found, their flipping animation should be disabled to prevent the players from accidentally or intentionally clicking on the cards again.