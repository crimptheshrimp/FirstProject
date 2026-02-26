import React from 'react';
import randomPicture from 'notyetdefined';

//hosts the data for the home page, containing quiz instructions and an example question. It also features some pictures of the artists for some colour and differentiation.

export const HomePage = () => {
    return <div>
            <p>This quiz will test your ability to NAME THAT POP SINGER. Please read through the how to rules below before continuing, and see the example question to understand the quiz. Click 'Start Quiz' when you are ready!</p>
                <h3><strong>How to quiz :</strong></h3>
                <br />
                <ul>
                    <li>Answers are given as blank responses, multiple choice or true or false</li>
                    <li>The quiz will ask you about pop singers from 2000-2020</li>
                    <li>You will be asked the 5 questions in a random order</li>
                    <li>Videos will be supplied with captions to help</li>
                </ul>
                <img src={randomPicture[0]} />
                <img src={randomPicture[1]} />
        </div>
}