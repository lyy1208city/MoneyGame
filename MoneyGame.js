import {questions} from './Question.js';
class MoneyGame {
    constructor(player, questionList = questions) {
        this.player = player;
        this.questions = questionList;
        this.currentEventIndex = 0;
        this.transitionDisplay = document.getElementById('transition-display');
        this.transitionMessage = document.getElementById('transition-message');
        this.eventContainer = document.getElementById('event-container');
        this.buttonsContainer = document.getElementById('buttons'); 
        this.summaryContainer = document.getElementById('summary-container');

        this.updateStatusBox();
    }

    //Update the status-box
    updateStatusBox() {
        const moneyInBankElement = document.getElementById('status-bank');
        const moneyInHandElement = document.getElementById('status-wallet');
        
        if (moneyInBankElement) {
            moneyInBankElement.textContent = this.player.getMoneyInBankAccount();
        }

        if (moneyInHandElement) {
            moneyInHandElement.textContent = this.player.getMoneyInHand();
        }
    }

    // Initialize and display the first event
    init() {
        this.displayEvent();
    }

    // Display the current event/question with gif
    displayEvent() {
        if (this.currentEventIndex >= this.questions.length) {
            this.showGameSummary();
            return;
        }

        const event = this.questions[this.currentEventIndex];
        const headerText = event.question;
        const gifPath = '//TBC'; // Placeholder for gif path

        this.eventContainer.innerHTML = `
            <div class="event active" id="event-${this.currentEventIndex}">
                <div class="event-header">
                    <div class="event-header-block">${headerText}</div>
                    <div class="event-gif-placeholder">
                        <img src="${gifPath}" alt="Event" style="display: ${gifPath === '//TBC' ? 'none' : 'block'}">
                    </div>
                </div>
            </div>
        `;

        this.displayChoice(); 
        this.player.interestAdding(); //Every Event,the interest rate cal 
    }

    // Display choice buttons for the current question
    displayChoice() {
        const event = this.questions[this.currentEventIndex];
        const choices = event.choices;
        let choicesHTML = '<div class="choices-container">';

        for (let i = 1; i <= 3; i++) {
            const choice = choices[`choice${i}`];
            choicesHTML += `
                <button class="choice-button" data-choice="${i}" data-attributes='${JSON.stringify(choice.Attributes)}'>
                    ${choice.text}
                </button>
            `;
        }

        choicesHTML += '</div>';
        this.buttonsContainer.innerHTML = choicesHTML;

        // Add event listeners to choice buttons
        const buttons = this.buttonsContainer.querySelectorAll('.choice-button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const attributes = JSON.parse(e.target.getAttribute('data-attributes'));
                if ((attributes.moneydecreaseInBank > this.player.getMoneyInBankAccount) || (attributes.moneydecreaseInHand > this.player.getMoneyInHand)){
                    return;
                }
                this.handleChoice(attributes);
            });
        });
    }

    // Handle choice selection and apply attributes
    handleChoice(attributes) {
        // Apply money changes to player
        if (attributes.moneyincreaseInBank > 0) {
            this.player.addMoneyToBankAccount(attributes.moneyincreaseInBank);
        }
        if (attributes.moneydecreaseInBank > 0) {
            this.player.minusMoneyFromBankAccount(attributes.moneydecreaseInBank);
        }
        if (attributes.moneyincreaseInHand > 0) {
            this.player.addMoneyToHand(attributes.moneyincreaseInHand);
        }
        if (attributes.moneydecreaseInHand > 0) {
            this.player.minusMoneyFromHand(attributes.moneydecreaseInHand);
        }
        //apply habbit
        if (attributes.habbits){
            this.player.AddHabbit(attributes.habbits)
        }


        // Update display
        this.updateStatusBox();

        // Move to next question
        this.currentEventIndex++;
        this.displayEvent();
    }

    // Show game summary when all questions are completed
    showGameSummary() {
        this.eventContainer.innerHTML = '';
        this.buttonsContainer.innerHTML = '';
        this.summaryContainer.innerHTML = `
            <div class="summary-title">遊戲結束</div>
            <div class="summary-content">
                <p>最終銀行餘額: $${this.player.getMoneyInBankAccount()}</p>
                <p>最終銀包金額: $${this.player.getMoneyInHand()}</p>
                <p> $${this.player.getHabbit()}</p>
            </div>
            <div id="control-buttons">
                <button class="restart-button" onclick="location.reload()">重新開始</button>
            </div>
        `;
    }
}

export { MoneyGame };
