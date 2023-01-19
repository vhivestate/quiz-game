import './App.css'
import Landing from './pages/Landing';
import Start from './pages/Start';
import Question from './pages/Question';
import Yes from './pages/Yes';
import No from './pages/No';
import Please from './pages/Please';
import FuckOff from './pages/FuckOff';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="/question" element={<Question/>}/>
        <Route path="/yes" element={<Yes/>}/>
        <Route path="/no" element={<No/>}/>
        <Route path="/please" element={<Please/>}/>
        <Route path="/fuckOff" element={<FuckOff/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;
