//Habit list: 理財, 享受當下, 儲蓄, 先洗未來錢, 節慳
export const questions = [
    {   
        "questionID":0,
        "question":"Mum give 200 to me",
        "choices":{
            "choice1": {
                "text":"Store in bank",
                "Attributes": {
                    "moneyincreaseInBank": 200,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 0,
                    "moneydecreaseInHand": 0,
                    "habbits": "理財",
                    "transition": "You have Store in bank"
                }
            },
            "choice2": {
                "text":"Buy a new clothes",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 0,
                    "moneydecreaseInHand": 0,
                    "habbits": "享受當下", 
                    "transition": "You have Buy a new clothes"
                }
            },
            "choice3": {
                "text":"put it in the wallet",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 200,
                    "moneydecreaseInHand": 0,
                    "habbits": "儲蓄", 
                    "transition": "put it in the wallet"
                }
            }
        }
    }, 
    {
        "questionID":1,
        "question":"Find $50 on floor",
        "choices":{
            "choice1": {
                "text":"put it in the wallet",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 50,
                    "moneydecreaseInHand": 0,
                    "habbits": "",
                    "transition": "put it in the wallet"
                }
            },
            "choice2": {
                "text":"Go and buy food",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 0,
                    "moneydecreaseInHand": 0,
                    "habbits": "享受當下",
                    "transition": "put it in the wallet"
                }
            },
            "choice3": {
                "text":"Give to police",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 0,
                    "moneydecreaseInHand": 0,
                    "habbits": "",
                    "transition": "put it in the wallet"
                }
            }
        }
    }, {
        "questionID":2,
        "question":"My phone is broken",
        "choices":{
            "choice1": {
                "text":"Buy Lastest iPhone from money on credit",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 5000,
                    "moneyincreaseInHand": 0,
                    "moneydecreaseInHand": 0,
                    "habbits": "先洗未來錢", 
                    "transition": "put it in the wallet"
                }
            },
            "choice2": {
                "text":"Use Mum old phone",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 0,
                    "moneydecreaseInHand": 0,
                    "habbits": "節慳", 
                    "transition": "put it in the wallet"
                }
            },
            "choice3": {
                "text":"Fix it",
                "Attributes": {
                    "moneyincreaseInBank": 0,
                    "moneydecreaseInBank": 0,
                    "moneyincreaseInHand": 0,
                    "moneydecreaseInHand": 50,
                    "habbits": "理財", 
                    "transition": "put it in the wallet"
                }
            }
        }
    }

]
