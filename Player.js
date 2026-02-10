class Player {
    constructor(){
        this.moneyInBankAccount = 0;
        this.moneyInHand = 0;
        this.habbit = []
        this.interestRateOfBank = 0.03;
    }

    interestAdding(){
        this.moneyInBankAccount = this.moneyInBankAccount * (1 + this.interestRateOfBank);
    }
    getMoneyInBankAccount() {
        return this.moneyInBankAccount;
    }

    getMoneyInHand() {
        return this.moneyInHand;
    }

    getHabbit(){
        return this.habbit;
    }

    addMoneyToBankAccount(amount) {
        this.moneyInBankAccount += amount;
    }

    addMoneyToHand(amount) {
        this.moneyInHand += amount;
    }

    minusMoneyFromBankAccount(amount) {
        this.moneyInBankAccount -= amount;
    }

    minusMoneyFromHand(amount) {
        this.moneyInHand -= amount;
    }

    AddHabbit(value){
        this.habbit.push(value);
    }
}

export { Player };
