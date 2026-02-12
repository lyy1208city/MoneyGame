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

    analysisTheHabits(value){
        const MostHabbit = this.findMostFrequent(this.habbit);
        let count = 0;
        for (const element of this.habbit){
            if(element === MostHabbit){
                count++;
            }
        }
        return `就你的消費習慣而言，您最能被描述為 ${MostHabbit} , 它佔了 ${(count/value*100).toFixed(2)}% 的選擇`;   
    }


    findMostFrequent(arr) {
    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequentElement;
    for (const element of arr) {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
        if (frequencyMap[element] > maxCount) {
        maxCount = frequencyMap[element];
        mostFrequentElement = element;
        }
    }
    return mostFrequentElement;
    }
    

}

export { Player };
