import React from 'react';
import pictureRandomiser from './pictureRandomiser';

// hosts the data for the home page, containing quiz instructions and an example question.

const HomePage = () => {
    return (
        <div>
            <p className="instructions">
                This quiz will test your ability to NAME THAT POP SINGER. Please read
                through the how to rules below before continuing, and see the example
                question to understand the quiz. Click 'Start Quiz' when you are ready!
            </p>
            <h2 className="subheader">
                <strong>RULES :</strong>
            </h2>
            <ul id="rules">
                <li>You will answers in either multiple choice or short answer format</li>
                <li>This quiz is on pop singers from 2000-2020</li>
                <li>Questions will be presented in a random order</li>
                <li>Press the 'Start Quiz' button to begin</li>
                <li>Press submit to have your answer checked and proceed to the next question</li>
                <li>Your score will be automatically displayed at the bottom of the page</li>
            </ul>
            <img src={pictureRandomiser()} alt="celebrity pop singer" className='img'/>
            <img src={pictureRandomiser()} alt="celebrity pop singer" className='img'/>
        </div>        
    );
};

export default HomePage;