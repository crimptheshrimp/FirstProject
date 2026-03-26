import React, { useState } from 'react';
import quiz from './quiz';
import pictureRandomiser from './pictureRandomiser';

// hosts the logic for the quiz page, properly displaying them

const QuizPage = () => {
    const [userAnswer, setUserAnswer] = useState('');
    const [remainingQ, setRemainingQ] = useState(quiz.questions);
    const [remainingAns, setRemainingAns] = useState(quiz.answers);
    const [score, setScore] = useState(0);
    const [questionNum, setQuestionNum] = useState(0);
    const [currentQ, setCurrentQ] = useState('This is the example question. Is this quiz named Chris\'s quiz?');
    const [currentAns, setCurrentAns] = useState('nope with a little bit of sauce');
    const [options, setOptions] = useState([]); 
    const [quizComplete, setQuizComplete] = useState(false);
    const [multipleChoice, setMultipleChoice] = useState(false);

    const showNextQuestion = () => {
        setMultipleChoice(false);
        // score check uses the arrayAns answer (first element of array)
        const arrayAns = Array.isArray(currentAns) ? currentAns[0] : currentAns;
        //first check the answer to the current question, and update score if correct
        if (userAnswer.trim().toLowerCase() === arrayAns.toLowerCase()) {
            setScore(prevScore => prevScore + 1);
        } else {
            // if the answer is wrong, alert the user with the correct answer before moving on
            alert(`Wrong! The correct answer was: ${arrayAns}`);
        }
        // if there are no more questions, mark completion
        if (remainingQ.length === 0) {
            setQuizComplete(true);
            return;
        }

        const q = Math.floor(Math.random() * remainingQ.length);

        setQuestionNum(prevNum => prevNum + 1);

        // set next question and answer
        const nextQ = remainingQ[q];
        const nextA = remainingAns[q];
        setCurrentQ(nextQ);

        if (Array.isArray(nextA)) {setMultipleChoice(true);
            // shuffle the choices for display
            const shuffled = [...nextA].sort(() => Math.random() - 0.5);
            setOptions(shuffled);
            setCurrentAns(nextA[0]); // treat first element as correct
        } else {
            setOptions([]);
            setCurrentAns(nextA);
        }

        setRemainingQ(prev => prev.filter((_, i) => i !== q));
        setRemainingAns(prev => prev.filter((_, i) => i !== q));
        setUserAnswer('');
    }

    // Displays everything, including the current question, the input box for the answer, the submit button, the score,
    // and, when appropriate, the multiple‑choice options or a completion message.
    return (
        // questions if quiz is complete, show completion message and score. If not, show current question, input box, submit button and score.
        <div>
            {quizComplete ? (
                <h1 id="quizCompleteMessage">
                    Quiz complete! Your score is {score} out of {questionNum}.
                    <img src={pictureRandomiser()} alt="celebrity pop singer" className='img'/>
                </h1>
            ) : (
                <> 
                    <h1 id="questionNum">{questionNum}. </h1> <br /> <h1 id="currentQuestion">{currentQ}</h1>
                    {multipleChoice ? (
                        {/* questions if it is multiple choice, then shows the options as radio buttons. If not, shows the text input box */},
                        <div className="choiceContainer" id="multipleChoiceInput">
                            <p>Multiple choice question! The options are:</p>
                            {options.map((opt, idx) => (
                                <div key={idx}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="multipleChoice"
                                            value={opt}
                                            checked={userAnswer === opt}
                                            onChange={(e) => setUserAnswer(e.target.value)}
                                        />
                                        {opt}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <input
                            id="answerInput"
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        /> 
                    )}
                    {/* submit button and score display, which is updated on each question */}
                    <div id="submitSection">
                        <button
                            id="nextButton"
                            onClick={showNextQuestion}
                        >
                            Submit
                        </button>
                        <p>Click "Submit" to submit your answer.</p>
                        {questionNum > 0 && <p id="scoreDisplay">{score} out of {questionNum - 1} correct.</p>}
                    </div>
                </>
            )}
        </div>
    );
}

export default QuizPage;