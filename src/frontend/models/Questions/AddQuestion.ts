import { AnswerDTO } from "models/Answer/AnswerDTO";

export class AddQuestion {
    question: string = "";
    hasHint: boolean = false;
    hint: string = ""
    answers: AnswerDTO[] = []
    hasExplanation: boolean = false;
    explanation: string = "";
}