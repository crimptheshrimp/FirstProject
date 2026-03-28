INDEX.JS
this is where everything from app.js is compiled to code that index.html can interpret and display

APP.JS
this is where all of the code comes together, it combines both the homepage and quizpage.
It also handles all of the styling with app.css, where I have styled everything on my webpage.

renderPage checks whether the user has clicked the start quiz button on the homepage, if so, it disables the start quiz button and sets the current page to the quizpage. Similarly, when the home button is clicked, the current page is set to the homepage, which it is set to by default.
Everything outside of the renderPage function stays on the webpage throughout the quiz.
The buttons can change the renderPage function.

HOME PAGE
the homepage hosts simple data to inform the user how the quiz works and display some pictures to draw the user in and give them an idea of what the quiz is about.

I imported the pictureRandomiser for the design.
The picture randomiser function produces two random pictures from an array.

QUIZ PAGE
the  quizpage holds the majority of code to create the functionality of the quiz. I had to use multiple different useStates to implement this.

I imported the quiz questions, answers and the pictureRandomiser for the end of the quiz.
The first part of the function checks the start of the answer array (if it is a multiple choice), otherwise it just uses the current answer, and then checks it against the users answer. If it is incorrect, the user recieves an alert that the answer was wrong and displays the correct answer in the alert.
It then checks to see if there are any questions remaining in the remainingQ array, if not, the qiuz is marked as complete and the score display is shown (64-69)

Next, it randomly chooses a number from the remainingQ length, to be used to choose the next question and then increases the question number. It then sets the next question and answer to the number chosen.

The answer is array checked, and if true, the answers are jumbled to make sure the user cannot just select the first answer. If false, the question is displayed as normal with an input box. The remaining questions and answers have the index of the current question/answer filtered out and the user answer is reset.

THE RETURN BODY
If multiple choice is true, each radio button recieves its own id and index. If it is false, an input box is displayed. Below that, a submit button is displayed, which saves the user answer, and repeats the whole process. The score checker displays the users score throughout the quiz

https://youtu.be/jWWW9Wyl0mY?si=6-cuGQbnPNrjtUTM - Used to understand how to use REACT filter rather than splice which did not achieve the desired result. Implemented on QuizPage.jsx 34-36

https://dev.to/juniordevforlife/adventures-with-javascript-arrays-random-numbers-array-4io1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray - Used to check if an object is an array. Implemented on QuizPage.jsx 44-52
