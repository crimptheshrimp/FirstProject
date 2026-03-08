import { useState } from 'react';
import HomePage from './features/homePage.jsx';
import QuizPage from './features/quizPage.jsx';
import './App.css';

// manages the state of which page is being shown, and renders the appropriate page based on that state. Also contains the header and footer, which are shown on both pages.

const App = () => {
  const renderPage = () => {
    return page === 'home' ? <HomePage /> : <QuizPage />;
  };

  const [page, setPage] = useState('home');

  return (
    <div>
      <header className="border">
        <h1 id="app-title">Quizlet
          <button  id="home-button" onClick={() => setPage('home')}>Home</button>
        </h1>
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
        <button id="start-quiz-button" onClick={() => setPage('quiz')} disabled={page==='quiz'}>Start Quiz</button>
      </footer>
    </div>
  );
};

export default App;