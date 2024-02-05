import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'src/pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
