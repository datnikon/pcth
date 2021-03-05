export interface QuestionAnswer {
    title: string;
    answers: Answer[];
    img?: string;
}

export interface Answer {
    title: string;
    isCorrect?: boolean;
}
