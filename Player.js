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
        for (const ele of this.habbit) {
            let countOfWellManage = 0, countOfspending = 0, countOfSaving = 0, countOfCredit = 0, countOfNotUse = 0;
            if(ele == "理財"){
                countOfWellManage++;
            }if (ele == "享受當下"){
                countOfspending++;
            }if (ele == "儲蓄"){
                countOfSaving++;
            }if (ele == "先洗未來錢"){
                countOfCredit++
            }if (ele == "節慳"){
                countOfNotUse++;
            }
        }
        const countArr = [countOfWellManage, countOfspending, countOfSaving, countOfCredit, countOfNotUse];
        countArr.sort(function(a, b){
            return a - b;
            });
    }
    
}

export { Player };
