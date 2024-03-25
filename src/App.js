import logo from './logo.svg';
import './App.css';
import Question1 from './components/assignment1/Question1';
import Question2 from './components/Question2';

function App() {
  return (
    <div className="App">
      <h1>Question 1 - Class component</h1>
      <Question1/>
      <h1>Question 2 - Functional component</h1>
      <Question2/>
    </div>
  );
}

export default App;
