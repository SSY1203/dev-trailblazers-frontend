import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Post } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
