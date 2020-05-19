import { NumbersEXP, ExpressionsEasy, ExpressionsMedium, Expressionshard } from "./numbers.constant"
import { quizEXP } from "./quiz.constant"

export const Modes = [
    {
        title: "Expressão aritmética",
        specs: [NumbersEXP, ExpressionsEasy, ExpressionsMedium, Expressionshard]
    },
    {
        title: "Quiz",
        specs: quizEXP
    },
]








