import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import CreateWithAI from './components/CreateWithAI';
import EventSetup from './components/EventSetup';
import EventPrompt from './components/EventPrompt';
import EventBuilder from './components/EventBuilder';

function App() {
  return (
    <Router>
      <div className="w-full h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-with-ai" element={<CreateWithAI />} />
          <Route path="/event-setup" element={<EventSetup />} />
          <Route path="/event-prompt" element={<EventPrompt />} />
          <Route path="/event-builder" element={<EventBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
