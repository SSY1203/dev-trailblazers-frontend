import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreatePost, EditUserInfo, Home, MyPosts, Post } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/id" element={<Post />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/mypage/edit/user/id" element={<EditUserInfo />} />
          <Route path="/mypage/user/id/:category" element={<MyPosts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
