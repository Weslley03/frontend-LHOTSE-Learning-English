import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearnPage from './pages/LearnPage/LearnPage';
import TrainYourListeningPage from './pages/TrainYourListeningPage/TrainYourListeningPage';

function App() {

  return (
      <Router>
        <Routes>
        <Route path="/train-your-listening" element={<TrainYourListeningPage />} />
          <Route path="/learnPage" element={<LearnPage />} />
          <Route path="/" element={<LearnPage />} />
        </Routes>
      </Router>
  )
}

export default App
