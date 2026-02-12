// Habits allowed: 衝動消費, 先洗未來錢, 善於理財成長, 節慳, 懂得儲蓄
export const questions = [
{
    "questionID": 0,
    "question": "學校放假，你收到爺爺給的利是 $500，你會點用？",
    "choices": {
        "choice1": {
            "text": "即刻去買新款波鞋同衫",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "衝動消費",
                "transition": "你即刻買咗心頭好，但銀包空咗"
            }
        },
        "choice2": {
            "text": "全部放進銀行儲蓄戶口",
            "Attributes": {
                "moneyincreaseInBank": 500,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "善於理財成長",
                "transition": "你選擇放銀行，錢開始慢慢幫你增值"
            }
        },
        "choice3": {
            "text": "放喺銀包當零用錢慢慢使",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 500,
                "moneydecreaseInHand": 0,
                "habbits": "懂得儲蓄",
                "transition": "你留喺銀包，隨時有錢使"
            }
        }
    }
},
{
    "questionID": 1,
    "question": "你同同學去飲茶，每人要畀 $85",
    "choices": {
        "choice1": {
            "text": "即刻用信用卡畀錢，之後再儲返",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 85,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "先洗未來錢",
                "transition": "你用咗信用卡，之後要還錢"
            }
        },
        "choice2": {
            "text": "話畀朋友知你想儲錢，唔去飲茶",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "節慳",
                "transition": "你選擇唔使錢，留低現金"
            }
        },
        "choice3": {
            "text": "用現金俾",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 85,
                "habbits": "衝動消費",
                "transition": "你借錢去食，但欠咗人情"
            }
        }
    }
},
{
    "questionID": 2,
    "question": "你平時每日搭巴士 $15",
    "choices": {
        "choice1": {
            "text": "搭的士返屋企 ($70)",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 70,
                "habbits": "衝動消費",
                "transition": "你即刻舒服返到屋企，但錢用晒"
            }
        },
        "choice2": {
            "text": "照常搭巴士",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 15,
                "habbits": "節慳",
                "transition": "你選擇慳錢"
            }
        },
        "choice3": {
            "text": "行返屋企",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "節慳",
                "transition": "你選擇慳錢"
            }
        }
    }
},
{
    "questionID": 3,
    "question": "你生日收到 $1200 利是",
    "choices": {
        "choice1": {
            "text": "全部存入銀行做定期",
            "Attributes": {
                "moneyincreaseInBank": 1200,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "善於理財成長",
                "transition": "你將錢放銀行，未來有少少利息"
            }
        },
        "choice2": {
            "text": "用買新手機配件",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "享受當下",
                "transition": "你買咗想要嘅嘢"
            }
        },
        "choice3": {
            "text": "全部放銀包當零用錢",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 1200,
                "moneydecreaseInHand": 0,
                "habbits": "懂得儲蓄",
                "transition": "你選擇留喺身邊，隨時可以用"
            }
        }
    }
},
{
    "questionID": 4,
    "question": "學校有個 $380 嘅日本文化日旅行團，你好想去",
    "choices": {
        "choice1": {
            "text": "用現存款即刻報名",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 380,
                "habbits": "善於理財成長",
                "transition": "你用存款參加，眼界有所成長"
            }
        },
        "choice2": {
            "text": "信用卡報名",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 380,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "先洗未來錢",
                "transition": "你先去到旅行，之後要還錢"
            }
        },
        "choice3": {
            "text": "唔去，慳番呢筆錢",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "節慳",
                "transition": "你選擇唔去，錢留喺度"
            }
        }
    }
},
{
    "questionID": 5,
    "question": "你同朋友約咗去睇戲，戲票 $70",
    "choices": {
        "choice1": {
            "text": "買票再買爆谷同飲品 ($150)",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 180,
                "habbits": "衝動消費",
                "transition": "你睇戲好爽，但銀包空晒"
            }
        },
        "choice2": {
            "text": "只買戲票，唔買零食",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 70,
                "habbits": "節慳",
                "transition": "你好好享受睇戲"
            }
        },
        "choice3": {
            "text": "用信用卡買票同零食再加周邊($300)，之後再儲返",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 300,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "先洗未來錢",
                "transition": "你即刻享受，之後要還錢"
            }
        }
    }
},
{
    "questionID": 6,
    "question": "你今個月零用錢月底剩 $120",
    "choices": {
        "choice1": {
            "text": "剩低嘅 $120 即刻存銀行",
            "Attributes": {
                "moneyincreaseInBank": 120,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 0,
                "habbits": "善於理財成長",
                "transition": "你每月小額都存，習慣開始養成"
            }
        },
        "choice2": {
            "text": "月底用晒剩餘錢請朋友食糖水",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 0,
                "moneydecreaseInHand": 120,
                "habbits": "衝動消費",
                "transition": "你請咗朋友，但下個月又從零開始"
            }
        },
        "choice3": {
            "text": "留 $120 在銀包做下個月預備",
            "Attributes": {
                "moneyincreaseInBank": 0,
                "moneydecreaseInBank": 0,
                "moneyincreaseInHand": 120,
                "moneydecreaseInHand": 0,
                "habbits": "懂得儲蓄",
                "transition": "你留現金在身邊，感覺較安心"
            }
        }
    }
}
]
