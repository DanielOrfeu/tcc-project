import { NumbersEXP, ExpressionsEasy, ExpressionsMedium, Expressionshard } from "./numbers.constant"
import { quizEXP } from "./quiz.constant"

export const Modes = [
    {
        title: "Expressão aritimética",
        specs: [NumbersEXP, ExpressionsEasy, ExpressionsMedium, Expressionshard]
    },
    {
        title: "Visuoespacial e Expressão facial",
        specs: quizEXP
    },
]








