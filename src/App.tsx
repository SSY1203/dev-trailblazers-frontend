import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  CreatePost,
  EditUserInfo,
  Home,
  Login,
  MyPosts,
  Post,
  SignUp,
} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/id" element={<Post />} />
          <Route path="/post/create" element={<CreatePost />} />

          {/* 마이페이지 */}
          <Route path="/mypage/edit/user/id" element={<EditUserInfo />} />
          <Route path="/mypage/user/id/:category" element={<MyPosts />} />

          {/* 로그인 및 회원가입 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
