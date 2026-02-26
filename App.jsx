import React from 'react';
import useState from 'react';
import HomePage from './Features/HomePage';

const App = () => {
    const [page,setPage] = useState(HomePage)
    return <div>
            <title>
            crimptheshrimps Quizlet
            </title>
            <span>
                <h1>
                    Quizlet
                </h1>
                <h2 id='homeButton' className="button">
                    <a href='Index.html'>
                        Home
                    </a>
                </h2>
            </span>
            <body>
                {page}
            </body>
            <footer>
                <h2 id='quizButton' className="button">
                    <a src="QuizPage.html" onClick={() => setPage(QuizPage)}>
                        Start Quiz
                    </a>
                    </h2>
            </footer>
        </div>
} ;

export default App;