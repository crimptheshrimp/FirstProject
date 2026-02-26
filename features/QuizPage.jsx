import React from 'react';
import Quiz from 'notsureyet';

export const QuizPage = () => {
    let questionNum = 0;
    let score = 0;
    const remaining = [...Quiz.questions];

    function showQuestion() {
        if (remaining.length === 0) {
            document.getElementById('nextButton').disabled = true;
            return;
            <div>
                <h1>
                    Quiz complete! Your score is {score} out of {Quiz.questions.length}.
                </h1>
            </div>
        } ;
        const q = Quiz.questionPicker(remaining);
        document.getElementById('questionDisplay').textContent = q;
        questionNum++;
        console.log('questionNum', questionNum);
    }

    document.getElementById('nextButton').addEventListener('click', showQuestion);
}