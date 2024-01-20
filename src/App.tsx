import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreatePost, Home, Post } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/id" element={<Post />} />
          <Route path="/post/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
