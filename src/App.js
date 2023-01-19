
import Landing from './pages/Landing';
import Start from './pages/Start';
import Joke from './pages/Joke';
import Question from './pages/Question';
import Confirm from './pages/Confirm';
import Yes from './pages/Yes';
import No from './pages/No';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="/joke" element={<Joke/>}/>
        <Route path="/question" element={<Question/>}/>
        <Route path="/confirm" element={<Confirm/>}/>
        <Route path="/yes" element={<Yes/>}/>
        <Route path="/no" element={<No/>}/>

      </Routes>
    
    </Router>
  );
}

export default App;
