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
        this.errorBox = document.getElementById('error-box');
        this.errorMessage = document.getElementById('error-message');
        this.errorCloseBtn = document.querySelector('.error-close-btn');

        // Setup error box close button
        if (this.errorCloseBtn) {
            this.errorCloseBtn.addEventListener('click', () => this.hideErrorBox());
        }

        this.updateStatusBox();
    }

    //Update the status-box
    updateStatusBox() {
        const moneyInBankElement = document.getElementById('status-bank');
        const moneyInHandElement = document.getElementById('status-wallet');
        
        if (moneyInBankElement) {
            moneyInBankElement.textContent = (this.player.getMoneyInBankAccount().toFixed(2));
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
                if (attributes.moneydecreaseInHand > this.player.getMoneyInHand()){
                    this.showErrorBox(attributes);
                    return;
                }
                this.handleChoice(attributes);
            });
        });
    }

    // Handle choice selection and apply attributes
    async handleChoice(attributes) {
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

        //Every Event,the interest rate cal 
        this.player.interestAdding();

        // Update display
        this.updateStatusBox();

        await this.showTransition(attributes.transition)

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
                <p>最終銀行餘額: $${this.player.getMoneyInBankAccount().toFixed(2)}</p>
                <p>最終現金餘額: $${this.player.getMoneyInHand()}</p>
                <p> ${this.player.analysisTheHabits(this.currentEventIndex)}</p>
            </div>
            <div id="control-buttons">
                <button class="restart-button" onclick="location.reload()">重新開始</button>
            </div>
        `;
        // Show the summary container
        this.summaryContainer.classList.add('show');
    }

    // Show error box with message
    showErrorBox(attributes) {
        let message = "";
        if (attributes.moneydecreaseInHand > this.player.getMoneyInHand()){
            message = "現金不足, 請重試";
        }else {
            message = "發生錯誤請重試";
        }
        this.errorMessage.textContent = message;
        this.errorBox.classList.add('show');
    }

    // Hide error box
    hideErrorBox() {
        this.errorBox.classList.remove('show');
    }

    // Show transition between events
    async showTransition(message, gifPath = 'player_walk.gif') {
            this.hideErrorBox();
            this.buttonsContainer.innerHTML = '';
            this.transitionMessage.textContent = message;
            
            const img = this.transitionDisplay.querySelector('img');
            img.src = gifPath;
            img.style.display = gifPath === '//TBC' ? 'none' : 'block';
            
            this.transitionDisplay.classList.add('show');
            
            return new Promise(resolve => {
                setTimeout(() => {
                    this.transitionDisplay.classList.remove('show');
                    resolve();
                }, 2000);
            });
        }
}


export { MoneyGame };
