import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  NavLink,
  useNavigate,
  Outlet,
  useParams,
} from 'react-router-dom';

const Todo = () => {
  return (<>
          <p>這是 Todo 頁面 </p>
         <LogOut />
          </>
         );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const LogOut = () => {
  const navigate = useNavigate();
  return (<p>這是登出按鈕<button type="button" onClick={()=>{ navigate('./login') }}>人生登出</button></p>);
};

const Post = () => {
  const navigate = useNavigate();
  return (<>
          <h3>這是Post頁面，下面是子層</h3>
          <Outlet />
          </>);
};

const PostId = () => {
let params = useParams();
  return <p> Post: {params.postId}</p>;

};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
           <NavLink to="/post/whatIsThis">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
         <Routes>
          <Route path="/" />
          <Route path="/register"  element={<Register />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Posr />} />
              <Route path=":postId" element={<PostId />} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
